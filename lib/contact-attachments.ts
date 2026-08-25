/** Max number of inspiration files on the contact form. */
export const CONTACT_MAX_FILES = 5

/**
 * Hard limit for the whole multipart request on Vercel Functions: 4.5 Mo.
 * Resend itself allows much more (~40 Mo), but files go through our API first.
 * Keep attachments at 3.5 Mo so form fields still fit under 4.5 Mo.
 */
export const CONTACT_MAX_TOTAL_ATTACHMENTS_BYTES = Math.floor(3.5 * 1024 * 1024)

/** One file cannot exceed the total budget. */
export const CONTACT_MAX_FILE_SIZE_BYTES = CONTACT_MAX_TOTAL_ATTACHMENTS_BYTES

export const CONTACT_MAX_TOTAL_ATTACHMENTS_LABEL = "3,5 Mo"
export const CONTACT_ATTACHMENTS_HELP_TEXT = `JPG, PNG, WebP ou PDF. Max ${CONTACT_MAX_FILES} fichiers, ${CONTACT_MAX_TOTAL_ATTACHMENTS_LABEL} au total.`

export const CONTACT_ACCEPTED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
] as const

export type ContactAcceptedMimeType =
  (typeof CONTACT_ACCEPTED_MIME_TYPES)[number]

export function isContactAcceptedMimeType(
  mimeType: string
): mimeType is ContactAcceptedMimeType {
  return (CONTACT_ACCEPTED_MIME_TYPES as readonly string[]).includes(mimeType)
}

export function getContactAttachmentsValidationError(
  files: Array<{ name: string; type: string; size: number }>
): string | null {
  if (files.length > CONTACT_MAX_FILES) {
    return `Maximum ${CONTACT_MAX_FILES} fichiers autorises.`
  }

  let totalSize = 0
  for (const file of files) {
    if (!isContactAcceptedMimeType(file.type)) {
      return `${file.name} : format non accepte (JPG, PNG, WebP ou PDF).`
    }
    if (file.size > CONTACT_MAX_FILE_SIZE_BYTES) {
      return `${file.name} : trop volumineux (max ${CONTACT_MAX_TOTAL_ATTACHMENTS_LABEL} par fichier).`
    }
    totalSize += file.size
  }

  if (totalSize > CONTACT_MAX_TOTAL_ATTACHMENTS_BYTES) {
    return `Pieces jointes trop volumineuses (max ${CONTACT_MAX_FILES} fichiers, ${CONTACT_MAX_TOTAL_ATTACHMENTS_LABEL} au total). Compressez les images ou retirez-en.`
  }

  return null
}
