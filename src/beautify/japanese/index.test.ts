import {parseForJapanese} from '.';

describe('beautify for japanese', () => {
  it('check for japan(978-4-00~978-4-19)', () => {
    expect(parseForJapanese('9784001111112')).toBe('978-4-00-111111-2');
    expect(parseForJapanese('9784191111112')).toBe('978-4-19-111111-2');
  });

  it('check for japan(978-4-200~978-4-699)', () => {
    expect(parseForJapanese('9784200111112')).toBe('978-4-200-11111-2');
    expect(parseForJapanese('9784699111112')).toBe('978-4-699-11111-2');
  });

  it('check for japan(978-4-7000~978-4-8499)', () => {
    expect(parseForJapanese('9784700011112')).toBe('978-4-7000-1111-2');
    expect(parseForJapanese('9784849911112')).toBe('978-4-8499-1111-2');
  });

  it('check for japan(978-4-85000~978-4-89999)', () => {
    expect(parseForJapanese('9784850001112')).toBe('978-4-85000-111-2');
    expect(parseForJapanese('9784899991112')).toBe('978-4-89999-111-2');
  });

  it('check for japan(978-4-900000~978-4-949999)', () => {
    expect(parseForJapanese('9784900000112')).toBe('978-4-900000-11-2');
    expect(parseForJapanese('9784949999112')).toBe('978-4-949999-11-2');
  });

  it('check for japan(978-4-9500000~978-4-9999999)', () => {
    expect(parseForJapanese('9784950000012')).toBe('978-4-9500000-1-2');
    expect(parseForJapanese('9784999999912')).toBe('978-4-9999999-1-2');
  });
});
