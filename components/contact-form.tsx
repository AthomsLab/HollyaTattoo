"use client"

import { useState, useRef } from "react"
import { Send, Paperclip, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const MAX_FILES = 5
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "application/pdf"]

type FormState = "idle" | "sending" | "success" | "error"

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [files, setFiles] = useState<File[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return
    const newFiles = Array.from(e.target.files)
    const validFiles: File[] = []
    const fileErrors: string[] = []

    for (const file of newFiles) {
      if (!ACCEPTED_TYPES.includes(file.type)) {
        fileErrors.push(`${file.name} : format non accepte`)
        continue
      }
      if (file.size > MAX_FILE_SIZE) {
        fileErrors.push(`${file.name} : taille max 5 Mo`)
        continue
      }
      validFiles.push(file)
    }

    const total = [...files, ...validFiles].slice(0, MAX_FILES)
    setFiles(total)

    if (fileErrors.length > 0) {
      setErrors((prev) => ({ ...prev, files: fileErrors.join(", ") }))
    } else {
      setErrors((prev) => {
        const next = { ...prev }
        delete next.files
        return next
      })
    }
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState("sending")
    setErrors({})

    const form = e.currentTarget
    const formData = new FormData(form)

    // Honeypot check
    if (formData.get("website")) {
      setFormState("idle")
      return
    }

    // Validation
    const newErrors: Record<string, string> = {}
    if (!formData.get("name")) newErrors.name = "Le nom est requis"
    if (!formData.get("email")) newErrors.email = "L'email est requis"
    if (!formData.get("description")) newErrors.description = "Decrivez votre projet"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setFormState("idle")
      return
    }

    // Add files to FormData
    files.forEach((file) => {
      formData.append("attachments", file)
    })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Erreur lors de l'envoi")
      }

      setFormState("success")
      form.reset()
      setFiles([])
    } catch {
      setFormState("error")
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
          <Input id="name" name="name" required placeholder="Votre nom" />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input id="email" name="email" type="email" required placeholder="votre@email.fr" />
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
        <p className="text-xs text-muted-foreground">
          JPG, PNG, WebP ou PDF. Max 5 fichiers, 5 Mo chacun.
        </p>
        <div className="flex flex-wrap gap-2">
          {files.map((file, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground"
            >
              <span className="max-w-[120px] truncate">{file.name}</span>
              <button type="button" onClick={() => removeFile(i)} aria-label={`Supprimer ${file.name}`}>
                <X className="h-3 w-3 text-muted-foreground hover:text-destructive" />
              </button>
            </div>
          ))}
          {files.length < MAX_FILES && (
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
        {errors.files && <p className="text-xs text-destructive">{errors.files}</p>}
      </div>

      {/* Error message */}
      {formState === "error" && (
        <p className="rounded-lg border border-destructive/20 bg-destructive/5 p-3 text-sm text-destructive">
          Une erreur est survenue. Veuillez reessayer ou contacter le studio directement.
        </p>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        disabled={formState === "sending"}
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
    </form>
  )
}
