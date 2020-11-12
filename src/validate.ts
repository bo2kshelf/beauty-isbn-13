export function validate(isbn: string): boolean {
  return /^97[89]\d{10}$/.test(isbn);
}
