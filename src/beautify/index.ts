import {inRange} from '../util';
import {split} from './common';
import {parseForJapanese} from './japanese';

export function beautify(isbn: string): string {
  if (isbn.startsWith('978')) {
    if (isbn.startsWith('9780')) return split(isbn, 1);
    if (isbn.startsWith('9781')) return split(isbn, 1);
    if (isbn.startsWith('9782')) return split(isbn, 1);
    if (isbn.startsWith('9783')) return split(isbn, 1);
    if (isbn.startsWith('9784')) return parseForJapanese(isbn);
    if (isbn.startsWith('9785')) return split(isbn, 1);

    if (inRange(Number(isbn.substr(3, 3)), 600, 622)) return split(isbn, 3);
    if (isbn.startsWith('97865')) return split(isbn, 2);

    if (isbn.startsWith('9787')) return split(isbn, 1);

    if (isbn.startsWith('97880')) return split(isbn, 2);
    if (isbn.startsWith('97881')) return split(isbn, 2);
    if (isbn.startsWith('97882')) return split(isbn, 2);
    if (isbn.startsWith('97883')) return split(isbn, 2);
    if (isbn.startsWith('97884')) return split(isbn, 2);
    if (isbn.startsWith('97885')) return split(isbn, 2);
    if (isbn.startsWith('97886')) return split(isbn, 2);
    if (isbn.startsWith('97887')) return split(isbn, 2);
    if (isbn.startsWith('97888')) return split(isbn, 2);
    if (isbn.startsWith('97889')) return split(isbn, 2);

    if (isbn.startsWith('97890')) return split(isbn, 2);
    if (isbn.startsWith('97891')) return split(isbn, 2);
    if (isbn.startsWith('97892')) return split(isbn, 2);
    if (isbn.startsWith('97893')) return split(isbn, 2);
    if (isbn.startsWith('97894')) return split(isbn, 2);

    if (inRange(Number(isbn.substr(3, 3)), 950, 989)) return split(isbn, 3);
    if (inRange(Number(isbn.substr(3, 4)), 9920, 9989)) return split(isbn, 4);
    if (inRange(Number(isbn.substr(3, 5)), 99901, 99981)) return split(isbn, 5);
  } else if (isbn.startsWith('979')) {
    if (isbn.startsWith('97910')) return split(isbn, 2);
    if (isbn.startsWith('97911')) return split(isbn, 2);
    if (isbn.startsWith('97912')) return split(isbn, 2);
  }
  return isbn;
}
