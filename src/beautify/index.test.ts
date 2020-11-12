import {beautify} from '.';

describe('beautify()', () => {
  it('check for english(978-0)', () => {
    expect(beautify('9780111111112')).toBe('978-0-11111111-2');
  });

  it('check for english(978-1)', () => {
    expect(beautify('9781111111112')).toBe('978-1-11111111-2');
  });

  it('check for french(978-2)', () => {
    expect(beautify('9782111111112')).toBe('978-2-11111111-2');
  });

  it('check for germany(978-3)', () => {
    expect(beautify('9783111111112')).toBe('978-3-11111111-2');
  });

  it('check for japan(978-4)', () => {
    expect(beautify('9784001111112')).toBe('978-4-00-111111-2');
    expect(beautify('9784200111112')).toBe('978-4-200-11111-2');
    expect(beautify('9784700011112')).toBe('978-4-7000-1111-2');
    expect(beautify('9784850001112')).toBe('978-4-85000-111-2');
    expect(beautify('9784900000112')).toBe('978-4-900000-11-2');
    expect(beautify('9784950000012')).toBe('978-4-9500000-1-2');
  });

  it('check for russian(978-5)', () => {
    expect(beautify('9785111111112')).toBe('978-5-11111111-2');
  });

  it('check for other(978-600~977-622)', () => {
    expect(beautify('9786001111112')).toBe('978-600-111111-2');
    expect(beautify('9786221111112')).toBe('978-622-111111-2');
  });

  it('check for brazil(978-65)', () => {
    expect(beautify('9786511111112')).toBe('978-65-1111111-2');
  });

  it('check for china(978-7)', () => {
    expect(beautify('9787111111112')).toBe('978-7-11111111-2');
  });

  it('check for czecho & slovakia(978-80)', () => {
    expect(beautify('9788011111112')).toBe('978-80-1111111-2');
  });

  it('check for india(978-81)', () => {
    expect(beautify('9788111111112')).toBe('978-81-1111111-2');
  });

  it('check for norway(978-82)', () => {
    expect(beautify('9788211111112')).toBe('978-82-1111111-2');
  });

  it('check for poland(978-83)', () => {
    expect(beautify('9788311111112')).toBe('978-83-1111111-2');
  });

  it('check for spain(978-84)', () => {
    expect(beautify('9788411111112')).toBe('978-84-1111111-2');
  });

  it('check for brazil(978-85)', () => {
    expect(beautify('9788511111112')).toBe('978-85-1111111-2');
  });

  it('check for serbia(978-86)', () => {
    expect(beautify('9788611111112')).toBe('978-86-1111111-2');
  });

  it('check for denmark(978-87)', () => {
    expect(beautify('9788711111112')).toBe('978-87-1111111-2');
  });

  it('check for italia(978-88)', () => {
    expect(beautify('9788811111112')).toBe('978-88-1111111-2');
  });

  it('check for korea(978-89)', () => {
    expect(beautify('9788911111112')).toBe('978-89-1111111-2');
  });

  it('check for neitherland(978-90)', () => {
    expect(beautify('9789011111112')).toBe('978-90-1111111-2');
  });

  it('check for sweden(978-91)', () => {
    expect(beautify('9789111111112')).toBe('978-91-1111111-2');
  });

  it('check for NGO & EU(978-92)', () => {
    expect(beautify('9789211111112')).toBe('978-92-1111111-2');
  });

  it('check for india(978-93)', () => {
    expect(beautify('9789311111112')).toBe('978-93-1111111-2');
  });

  it('check for neitherland(978-94)', () => {
    expect(beautify('9789411111112')).toBe('978-94-1111111-2');
  });

  it('check for other(978-950~979-989)', () => {
    expect(beautify('9789501111112')).toBe('978-950-111111-2');
    expect(beautify('9789891111112')).toBe('978-989-111111-2');
  });

  it('check for other(978-9920~979-9989)', () => {
    expect(beautify('9789920111112')).toBe('978-9920-11111-2');
    expect(beautify('9789989111112')).toBe('978-9989-11111-2');
  });

  it('check for other(978-99901~978-99981)', () => {
    expect(beautify('9789990122223')).toBe('978-99901-2222-3');
    expect(beautify('9789998122223')).toBe('978-99981-2222-3');
  });

  it('french(979-10)', () => {
    expect(beautify('9791011111112')).toBe('979-10-1111111-2');
  });

  it('korea(979-11)', () => {
    expect(beautify('9791111111112')).toBe('979-11-1111111-2');
  });

  it('italia(979-12)', () => {
    expect(beautify('9791211111112')).toBe('979-12-1111111-2');
  });

  it('unable to beautify', () => {
    expect(beautify('9801111111112')).toBe('9801111111112');
  });
});
