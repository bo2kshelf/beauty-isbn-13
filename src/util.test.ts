import {dehyphenize} from './util';

describe('dehyphenize()', () => {
  it('correctly work', () => {
    expect(dehyphenize('9784088817804')).toBe('9784088817804');
    expect(dehyphenize('978-4-08-881780-4')).toBe('9784088817804');
  });
});
