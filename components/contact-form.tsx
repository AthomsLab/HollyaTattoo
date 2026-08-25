"use client"

import { useMemo, useRef, useState } from "react"
import { Instagram, Loader2, Mail, Paperclip, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { siteConfig } from "@/content/site"
import {
  CONTACT_ATTACHMENTS_HELP_TEXT,
  CONTACT_MAX_FILES,
  CONTACT_MAX_TOTAL_ATTACHMENTS_LABEL,
  getContactAttachmentsValidationError,
  isContactAcceptedMimeType,
} from "@/lib/contact-attachments"
import { isValidContactEmail } from "@/lib/contact-email"

const LOG_TAG = "[HollyContact]"
const FIELD_ERROR_CLASS_NAME =
  "border-destructive ring-[3px] ring-destructive/50 focus-visible:border-destructive focus-visible:ring-destructive/50"

type FormState = "idle" | "sending" | "success"
type SubmitIssue = "none" | "attachments" | "rate_limit" | "service" | "validation"

type ContactApiSuccess = {
  success: true
  debug?: {
    requestId?: string
    emailId?: string | null
    attachmentCount?: number
  }
}

type ContactApiError = {
  error?: string
  debug?: {
    requestId?: string
    reason?: string
    message?: string
    resendError?: unknown
  }
}

function AlternateContactLinks() {
  return (
    <div className="mt-3 flex flex-col gap-2">
      <a
        href={`mailto:${siteConfig.email}`}
        className="inline-flex items-center gap-2 text-primary underline-offset-4 hover:underline"
      >
        <Mail className="h-4 w-4" />
        {siteConfig.email}
      </a>
      {siteConfig.socials.instagram && (
        <a
          href={siteConfig.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary underline-offset-4 hover:underline"
        >
          <Instagram className="h-4 w-4" />
          Instagram @hollya_tattoo
        </a>
      )}
    </div>
  )
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [submitIssue, setSubmitIssue] = useState<SubmitIssue>("none")
  const [files, setFiles] = useState<File[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [fileWarning, setFileWarning] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const attachmentsError = useMemo(
    () => getContactAttachmentsValidationError(files),
    [files]
  )
  const hasEmailError = Boolean(errors.email)
  const hasNameError = Boolean(errors.name)
  const hasDescriptionError = Boolean(errors.description)
  const isSubmitDisabled =
    formState === "sending" || Boolean(attachmentsError) || hasEmailError

  function getEmailFieldError(value: string): string | null {
    const trimmed = value.trim()
    if (!trimmed) return "L'email est requis"
    if (!isValidContactEmail(trimmed)) return "Adresse email invalide."
    return null
  }

  function handleEmailBlur(e: React.FocusEvent<HTMLInputElement>) {
    const emailError = getEmailFieldError(e.target.value)
    setErrors((prev) => {
      const next = { ...prev }
      if (emailError) {
        next.email = emailError
      } else {
        delete next.email
      }
      return next
    })
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Clear the blur error as soon as the value becomes valid again.
    if (!errors.email) return
    const emailError = getEmailFieldError(e.target.value)
    if (!emailError) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next.email
        return next
      })
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return
    const newFiles = Array.from(e.target.files)
    const acceptedFiles: File[] = []
    const rejectedMessages: string[] = []

    for (const file of newFiles) {
      if (!isContactAcceptedMimeType(file.type)) {
        rejectedMessages.push(`${file.name} : format non accepte`)
        continue
      }
      const singleFileError = getContactAttachmentsValidationError([file])
      if (singleFileError) {
        rejectedMessages.push(singleFileError)
        continue
      }
      acceptedFiles.push(file)
    }

    const nextFiles = [...files, ...acceptedFiles].slice(0, CONTACT_MAX_FILES)
    const totalError = getContactAttachmentsValidationError(nextFiles)

    if (totalError) {
      // Keep current valid selection; only warn that the new files were refused.
      setFileWarning(totalError)
      e.target.value = ""
      return
    }

    setFiles(nextFiles)
    if (submitIssue === "attachments") {
      setSubmitIssue("none")
    }
    setErrors((prev) => {
      const next = { ...prev }
      delete next.files
      return next
    })
    setFileWarning(
      rejectedMessages.length > 0 ? rejectedMessages.join(", ") : null
    )
    e.target.value = ""
  }

  function removeFile(index: number) {
    setFiles((prev) => {
      const next = prev.filter((_, i) => i !== index)
      const nextError = getContactAttachmentsValidationError(next)
      setErrors((current) => {
        const updated = { ...current }
        if (nextError) {
          updated.files = nextError
        } else {
          delete updated.files
        }
        return updated
      })
      if (!nextError) {
        setFileWarning(null)
        setSubmitIssue((current) =>
          current === "attachments" ? "none" : current
        )
      }
      return next
    })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    console.log(LOG_TAG, "Submit started", {
      fileCount: files.length,
      fileNames: files.map((file) => file.name),
    })

    // Honeypot check
    if (formData.get("website")) {
      console.warn(LOG_TAG, "Honeypot filled — aborting silently")
      return
    }

    // Validation
    const newErrors: Record<string, string> = {}
    const emailValue = String(formData.get("email") ?? "").trim()
    if (!formData.get("name")) newErrors.name = "Le nom est requis"
    const emailError = getEmailFieldError(emailValue)
    if (emailError) newErrors.email = emailError
    if (!formData.get("description")) newErrors.description = "Decrivez votre projet"

    const currentAttachmentsError = getContactAttachmentsValidationError(files)
    if (currentAttachmentsError) {
      newErrors.files = currentAttachmentsError
    }

    if (Object.keys(newErrors).length > 0) {
      console.warn(LOG_TAG, "Client validation failed", newErrors)
      setErrors(newErrors)
      setSubmitIssue(currentAttachmentsError ? "attachments" : "none")
      setFormState("idle")
      return
    }

    setFormState("sending")
    setSubmitIssue("none")
    setErrors({})
    setFileWarning(null)

    // Add files to FormData
    files.forEach((file) => {
      formData.append("attachments", file)
    })

    const payloadSnapshot = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      descriptionLength: String(formData.get("description") ?? "").length,
      placement: String(formData.get("placement") ?? ""),
      size: String(formData.get("size") ?? ""),
      dates: String(formData.get("dates") ?? ""),
      attachmentCount: files.length,
    }
    console.log(LOG_TAG, "POST /api/contact", payloadSnapshot)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      const rawBody: unknown = await res.json().catch((parseError: unknown) => {
        console.error(LOG_TAG, "Failed to parse JSON response", {
          status: res.status,
          parseError,
        })
        return null
      })

      console.log(LOG_TAG, "API response", {
        ok: res.ok,
        status: res.status,
        body: rawBody,
      })

      if (!res.ok) {
        const data = (rawBody ?? {}) as ContactApiError
        const apiError = data.error || "Erreur lors de l'envoi"
        const reason = data.debug?.reason

        if (res.status === 400 && reason === "invalid_attachments") {
          setErrors({
            files:
              data.error ||
              `Pieces jointes trop volumineuses (max ${CONTACT_MAX_FILES} fichiers, ${CONTACT_MAX_TOTAL_ATTACHMENTS_LABEL} au total).`,
          })
          setSubmitIssue("attachments")
          setFormState("idle")
          return
        }

        if (res.status === 400 && reason === "invalid_email") {
          setErrors({ email: apiError })
          setSubmitIssue("none")
          setFormState("idle")
          return
        }

        if (res.status === 400 && reason === "missing_required_fields") {
          setErrors({
            name: "Verifiez les champs obligatoires.",
            email: "Verifiez les champs obligatoires.",
            description: "Verifiez les champs obligatoires.",
          })
          setSubmitIssue("validation")
          setFormState("idle")
          return
        }

        // Any other 400: show the API error text as form validation, not "service down"
        if (res.status === 400) {
          console.warn(LOG_TAG, "API validation error", { apiError, reason })
          setSubmitIssue("validation")
          setErrors({ form: apiError })
          setFormState("idle")
          return
        }

        if (res.status === 429) {
          setSubmitIssue("rate_limit")
          setFormState("idle")
          return
        }

        throw new Error(apiError)
      }

      const data = (rawBody ?? {}) as ContactApiSuccess
      console.log(LOG_TAG, "Submit success", data.debug ?? null)

      setFormState("success")
      form.reset()
      setFiles([])
    } catch (error) {
      console.error(LOG_TAG, "Submit failed", error)
      setSubmitIssue("service")
      setFormState("idle")
    }
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Send className="h-7 w-7" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-foreground">Message envoye !</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Merci pour votre message. Vous recevrez une reponse dans les meilleurs delais.
        </p>
        <Button
          variant="outline"
          onClick={() => setFormState("idle")}
          className="mt-2"
        >
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      {/* Honeypot */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir</label>
        <input type="text" name="website" id="website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Name & Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">
            Nom <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Votre nom"
            aria-invalid={hasNameError}
            className={hasNameError ? FIELD_ERROR_CLASS_NAME : undefined}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="votre@email.fr"
            aria-invalid={hasEmailError}
            onBlur={handleEmailBlur}
            onChange={handleEmailChange}
            className={hasEmailError ? FIELD_ERROR_CLASS_NAME : undefined}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Telephone (optionnel)</Label>
        <Input id="phone" name="phone" type="tel" placeholder="06 00 00 00 00" />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">
          Votre projet <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="description"
          name="description"
          required
          rows={4}
          placeholder="Decrivez votre idee de tatouage, le style souhaite, l'emplacement..."
          aria-invalid={hasDescriptionError}
          className={hasDescriptionError ? FIELD_ERROR_CLASS_NAME : undefined}
        />
        {errors.description && <p className="text-xs text-destructive">{errors.description}</p>}
      </div>

      {/* Placement & Size */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="placement">Emplacement (optionnel)</Label>
          <Input id="placement" name="placement" placeholder="Ex: avant-bras, poignet..." />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="size">Taille souhaitee (optionnel)</Label>
          <Input id="size" name="size" placeholder="Ex: 5cm, grand..." />
        </div>
      </div>

      {/* Preferred dates */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="dates">Dates preferees (optionnel)</Label>
        <Input id="dates" name="dates" placeholder="Ex: mars, week-end..." />
      </div>

      {/* File upload */}
      <div className="flex flex-col gap-2">
        <Label>Inspirations (optionnel)</Label>
        <p className="text-xs text-muted-foreground">{CONTACT_ATTACHMENTS_HELP_TEXT}</p>
        <div className="flex flex-wrap gap-2">
          {files.map((file, i) => (
            <div
              key={`${file.name}-${file.size}-${i}`}
              className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground"
            >
              <span className="max-w-[120px] truncate">{file.name}</span>
              <button type="button" onClick={() => removeFile(i)} aria-label={`Supprimer ${file.name}`}>
                <X className="h-3 w-3 text-muted-foreground hover:text-destructive" />
              </button>
            </div>
          ))}
          {files.length < CONTACT_MAX_FILES && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 rounded-lg border border-dashed border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Paperclip className="h-3 w-3" />
              Ajouter
            </button>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp,.pdf"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
        {(errors.files || attachmentsError) && (
          <p className="text-xs text-destructive">{errors.files || attachmentsError}</p>
        )}
        {fileWarning && !errors.files && !attachmentsError && (
          <p className="text-xs text-muted-foreground">{fileWarning}</p>
        )}
      </div>

      {submitIssue === "attachments" && (
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-foreground">
          <p className="font-medium text-destructive">Pieces jointes trop volumineuses</p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            {CONTACT_ATTACHMENTS_HELP_TEXT} Compressez vos images ou retirez des fichiers pour
            pouvoir envoyer le formulaire.
          </p>
        </div>
      )}

      {submitIssue === "validation" && (
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-foreground">
          <p className="font-medium text-destructive">Formulaire incomplet ou invalide</p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            {errors.form ||
              "Merci de verifier les informations saisies avant de renvoyer votre demande."}
          </p>
        </div>
      )}

      {submitIssue === "rate_limit" && (
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-foreground">
          <p className="font-medium text-destructive">Trop de demandes pour le moment</p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Vous avez atteint la limite d&apos;envois. Reessayez un peu plus tard, ou contactez-nous
            directement :
          </p>
          <AlternateContactLinks />
        </div>
      )}

      {submitIssue === "service" && (
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-foreground">
          <p className="font-medium text-destructive">
            Probleme temporaire avec l&apos;envoi du formulaire
          </p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Le service d&apos;envoi d&apos;emails ne repond pas correctement pour le moment.
            Votre demande n&apos;a peut-etre pas ete transmise. En attendant, contactez-nous
            directement :
          </p>
          <AlternateContactLinks />
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitDisabled}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {formState === "sending" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Envoyer ma demande
          </>
        )}
      </Button>
      {attachmentsError && (
        <p className="text-xs text-muted-foreground">
          Corrigez les pieces jointes pour reactiver l&apos;envoi.
        </p>
      )}
      {hasEmailError && !attachmentsError && (
        <p className="text-xs text-muted-foreground">
          Corrigez l&apos;adresse email pour reactiver l&apos;envoi.
        </p>
      )}
    </form>
  )
}
