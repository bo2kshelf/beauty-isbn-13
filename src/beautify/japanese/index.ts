import {inRange} from '../../util';

export function parseForJapanese(isbn: string): string {
  if (inRange(Number(isbn.substr(4, 2)), 0, 19))
    return `978-4-${isbn.substr(4, 2)}-${isbn.substr(6, 6)}-${isbn.slice(-1)}`;
  else if (inRange(Number(isbn.substr(4, 3)), 200, 699))
    return `978-4-${isbn.substr(4, 3)}-${isbn.substr(7, 5)}-${isbn.slice(-1)}`;
  else if (inRange(Number(isbn.substr(4, 4)), 7000, 8499))
    return `978-4-${isbn.substr(4, 4)}-${isbn.substr(8, 4)}-${isbn.slice(-1)}`;
  else if (inRange(Number(isbn.substr(4, 5)), 85000, 89999))
    return `978-4-${isbn.substr(4, 5)}-${isbn.substr(9, 3)}-${isbn.slice(-1)}`;
  else if (inRange(Number(isbn.substr(4, 6)), 900000, 949999))
    return `978-4-${isbn.substr(4, 6)}-${isbn.substr(10, 2)}-${isbn.slice(-1)}`;
  else if (inRange(Number(isbn.substr(4, 7)), 9500000, 9999999))
    return `978-4-${isbn.substr(4, 7)}-${isbn.substr(11, 1)}-${isbn.slice(-1)}`;
  else return `978-4-${isbn.substring(4)}`;
}
