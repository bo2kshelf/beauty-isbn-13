export function split(isbn: string, group: number): string {
  return [
    isbn.substr(0, 3),
    isbn.substr(3, group),
    isbn.substr(3 + group, 9 - group),
    isbn.slice(-1),
  ].join('-');
}
