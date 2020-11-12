import {beautify} from './beautify';
import {dehyphenize} from './util';
import {validate} from './validate';

// eslint-disable-next-line import/no-anonymous-default-export
export default (isbn: string) =>
  validate(dehyphenize(isbn)) ? beautify(dehyphenize(isbn)) : isbn;
