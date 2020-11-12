export const inRange = (number: number, min: number, max: number) =>
  min <= number && number <= max;

export const dehyphenize = (isbn: string) => isbn.replace(/-/g, '');
