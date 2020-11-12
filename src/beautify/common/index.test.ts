import {split} from '.';

describe('split for japanese', () => {
  it('check for english(978-0)', () => {
    expect(split('9780111111112', 1)).toBe('978-0-11111111-2');
  });

  it('check for english(978-1)', () => {
    expect(split('9781111111112', 1)).toBe('978-1-11111111-2');
  });

  it('check for french(978-2)', () => {
    expect(split('9782111111112', 1)).toBe('978-2-11111111-2');
  });

  it('check for germany(978-3)', () => {
    expect(split('9783111111112', 1)).toBe('978-3-11111111-2');
  });

  it('check for russian(978-5)', () => {
    expect(split('9785111111112', 1)).toBe('978-5-11111111-2');
  });

  it('check for other(978-600~977-622)', () => {
    expect(split('9786001111112', 3)).toBe('978-600-111111-2');
    expect(split('9786221111112', 3)).toBe('978-622-111111-2');
  });

  it('check for brazil(978-65)', () => {
    expect(split('9786511111112', 2)).toBe('978-65-1111111-2');
  });

  it('check for china(978-7)', () => {
    expect(split('9787111111112', 1)).toBe('978-7-11111111-2');
  });

  it('check for czecho & slovakia(978-80)', () => {
    expect(split('9788011111112', 2)).toBe('978-80-1111111-2');
  });

  it('check for india(978-81)', () => {
    expect(split('9788111111112', 2)).toBe('978-81-1111111-2');
  });

  it('check for norway(978-82)', () => {
    expect(split('9788211111112', 2)).toBe('978-82-1111111-2');
  });

  it('check for poland(978-83)', () => {
    expect(split('9788311111112', 2)).toBe('978-83-1111111-2');
  });

  it('check for spain(978-84)', () => {
    expect(split('9788411111112', 2)).toBe('978-84-1111111-2');
  });

  it('check for brazil(978-85)', () => {
    expect(split('9788511111112', 2)).toBe('978-85-1111111-2');
  });

  it('check for serbia(978-86)', () => {
    expect(split('9788611111112', 2)).toBe('978-86-1111111-2');
  });

  it('check for denmark(978-87)', () => {
    expect(split('9788711111112', 2)).toBe('978-87-1111111-2');
  });

  it('check for italia(978-88)', () => {
    expect(split('9788811111112', 2)).toBe('978-88-1111111-2');
  });

  it('check for korea(978-89)', () => {
    expect(split('9788911111112', 2)).toBe('978-89-1111111-2');
  });

  it('check for neitherland(978-90)', () => {
    expect(split('9789011111112', 2)).toBe('978-90-1111111-2');
  });

  it('check for sweden(978-91)', () => {
    expect(split('9789111111112', 2)).toBe('978-91-1111111-2');
  });

  it('check for NGO & EU(978-92)', () => {
    expect(split('9789211111112', 2)).toBe('978-92-1111111-2');
  });

  it('check for india(978-93)', () => {
    expect(split('9789311111112', 2)).toBe('978-93-1111111-2');
  });

  it('check for neitherland(978-94)', () => {
    expect(split('9789411111112', 2)).toBe('978-94-1111111-2');
  });

  it('check for other(978-950~979-989)', () => {
    expect(split('9789501111112', 3)).toBe('978-950-111111-2');
    expect(split('9789891111112', 3)).toBe('978-989-111111-2');
  });

  it('check for other(978-9920~979-9989)', () => {
    expect(split('9789920111112', 4)).toBe('978-9920-11111-2');
    expect(split('9789989111112', 4)).toBe('978-9989-11111-2');
  });

  it('check for other(978-99901~978-99981)', () => {
    expect(split('9789990122223', 5)).toBe('978-99901-2222-3');
    expect(split('9789998122223', 5)).toBe('978-99981-2222-3');
  });

  it('french(979-10)', () => {
    expect(split('9791011111112', 2)).toBe('979-10-1111111-2');
  });

  it('korea(979-11)', () => {
    expect(split('9791111111112', 2)).toBe('979-11-1111111-2');
  });

  it('italia(979-12)', () => {
    expect(split('9791211111112', 2)).toBe('979-12-1111111-2');
  });
});
