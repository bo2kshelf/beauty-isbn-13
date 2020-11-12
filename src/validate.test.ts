import {validate} from './validate';

describe('validate()', () => {
  it('valid', () => {
    expect(validate('9784088817804')).toBe(true);
    expect(validate('9791095118022')).toBe(true);
  });

  it('not 13 digit', () => {
    expect(validate('978408881780')).toBe(false);
    expect(validate('97840888178040')).toBe(false);
  });

  it('not start with 978 or 979', () => {
    expect(validate('9804088817804')).toBe(false);
  });
});
