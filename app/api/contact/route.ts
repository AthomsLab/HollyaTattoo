import { NextResponse } from "next/server"
import { Resend } from "resend"

const LOG_TAG = "[HollyContact]"

const CONTACT_TO_EMAIL = "hollyatatoo@gmail.com"
const CONTACT_FROM_EMAIL = "Holly Tattoo <noreply@resend.dev>"

// Initialize Resend
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

// Basic in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)

  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false
  }

  entry.count++
  return true
}

function getFormString(formData: FormData, key: string): string {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

export async function POST(request: Request) {
  const requestId = crypto.randomUUID().slice(0, 8)
  console.log(LOG_TAG, "POST /api/contact start", {
    requestId,
    hasResendApiKey: Boolean(resendApiKey),
    resendApiKeyPrefix: resendApiKey ? `${resendApiKey.slice(0, 8)}...` : null,
  })

  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown"
    if (!checkRateLimit(ip)) {
      console.warn(LOG_TAG, "Rate limit hit", { requestId, ip })
      return NextResponse.json(
        { error: "Trop de requetes. Reessayez plus tard." },
        { status: 429 }
      )
    }

    const formData = await request.formData()
    const formKeys = Array.from(formData.keys())
    const attachmentCount = formData.getAll("attachments").length
    console.log(LOG_TAG, "FormData received", {
      requestId,
      formKeys,
      attachmentCount,
    })

    // Honeypot
    if (formData.get("website")) {
      console.warn(LOG_TAG, "Honeypot triggered — fake success", { requestId })
      return NextResponse.json({ success: true })
    }

    // Extract fields
    const name = getFormString(formData, "name")
    const email = getFormString(formData, "email")
    const phone = getFormString(formData, "phone")
    const description = getFormString(formData, "description")
    const placement = getFormString(formData, "placement")
    const size = getFormString(formData, "size")
    const dates = getFormString(formData, "dates")

    console.log(LOG_TAG, "Parsed fields", {
      requestId,
      name,
      email,
      phone: phone || null,
      descriptionLength: description.length,
      placement: placement || null,
      size: size || null,
      dates: dates || null,
    })

    // Validation
    if (!name || !email || !description) {
      console.warn(LOG_TAG, "Validation failed: missing required fields", {
        requestId,
        hasName: Boolean(name),
        hasEmail: Boolean(email),
        hasDescription: Boolean(description),
      })
      return NextResponse.json(
        { error: "Veuillez remplir les champs obligatoires." },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.warn(LOG_TAG, "Validation failed: invalid email", {
        requestId,
        email,
      })
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      )
    }

    // Build email content
    const emailContent = `
Nouvelle demande de contact - Holly Tattoo

**Informations personnelles:**
- Nom: ${name}
- Email: ${email}
- Telephone: ${phone || "Non fourni"}

**Demande de tatouage:**
- Description: ${description}
- Emplacement: ${placement || "Non spécifié"}
- Taille: ${size || "Non spécifiée"}
- Dates: ${dates || "À discuter"}

Répondre directement à: ${email}
    `.trim()

    if (!resend || !resendApiKey) {
      console.error(LOG_TAG, "RESEND_API_KEY missing — email NOT sent", {
        requestId,
        emailContent,
      })
      return NextResponse.json(
        {
          error: "Configuration email manquante (RESEND_API_KEY).",
          debug: { requestId, reason: "missing_api_key" },
        },
        { status: 500 }
      )
    }

    const payload = {
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Nouvelle demande de tatouage de ${name}`,
      text: emailContent,
    }

    console.log(LOG_TAG, "Calling Resend emails.send", {
      requestId,
      from: payload.from,
      to: payload.to,
      replyTo: payload.replyTo,
      subject: payload.subject,
      textLength: payload.text.length,
      note: "attachments are accepted by the form but NOT yet sent via Resend",
    })

    try {
      const { data, error } = await resend.emails.send(payload)

      if (error) {
        console.error(LOG_TAG, "Resend returned error (no throw)", {
          requestId,
          error,
        })
        return NextResponse.json(
          {
            error: "L'envoi de l'email a échoué.",
            debug: {
              requestId,
              reason: "resend_error",
              resendError: error,
            },
          },
          { status: 502 }
        )
      }

      console.log(LOG_TAG, "Resend success", {
        requestId,
        emailId: data?.id ?? null,
        data,
      })

      return NextResponse.json({
        success: true,
        debug: {
          requestId,
          emailId: data?.id ?? null,
        },
      })
    } catch (emailError) {
      console.error(LOG_TAG, "Resend threw exception", {
        requestId,
        emailError,
      })
      return NextResponse.json(
        {
          error: "L'envoi de l'email a échoué.",
          debug: {
            requestId,
            reason: "resend_exception",
            message:
              emailError instanceof Error
                ? emailError.message
                : "unknown_exception",
          },
        },
        { status: 502 }
      )
    }
  } catch (error) {
    console.error(LOG_TAG, "Unhandled server error", { requestId, error })
    return NextResponse.json(
      {
        error: "Erreur serveur. Veuillez reessayer.",
        debug: {
          requestId,
          reason: "unhandled_error",
          message: error instanceof Error ? error.message : "unknown_error",
        },
      },
      { status: 500 }
    )
  }
}
