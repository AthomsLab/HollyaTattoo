import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

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

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown"
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Trop de requetes. Reessayez plus tard." },
        { status: 429 }
      )
    }

    const formData = await request.formData()

    // Honeypot
    if (formData.get("website")) {
      return NextResponse.json({ success: true })
    }

    // Extract fields
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = (formData.get("phone") as string) || ""
    const description = formData.get("description") as string
    const placement = (formData.get("placement") as string) || ""
    const size = (formData.get("size") as string) || ""
    const dates = (formData.get("dates") as string) || ""

    // Validation
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: "Veuillez remplir les champs obligatoires." },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
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

    // Send email with Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "Holly Tattoo <noreply@resend.dev>",
          to: "hollyatatoo@gmail.com",
          replyTo: email,
          subject: `Nouvelle demande de tatouage de ${name}`,
          text: emailContent,
        })
      } catch (emailError) {
        console.error("Erreur lors de l'envoi de l'email:", emailError)
        // Continue anyway - don't fail the request if email fails
      }
    } else {
      // If no API key, just log (for development)
      console.log("=== RESEND_API_KEY non configurée - Mode développement ===")
      console.log(emailContent)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur serveur:", error)
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez reessayer." },
      { status: 500 }
    )
  }
}
