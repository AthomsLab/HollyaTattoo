export const CONTACT_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidContactEmail(email: string): boolean {
  return CONTACT_EMAIL_REGEX.test(email.trim())
}
