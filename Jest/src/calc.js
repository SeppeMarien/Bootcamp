export class ValueError extends Error {
  constructor() {
    super();
    this.name = 'ValueError';
  }
}

export function sum(...a) {
  return a.reduce((acc, value) => {
    const num = Number(value || 0);
    if (Object.is(num, NaN)) {
      throw new ValueError();
    }
    return Number(acc) + Number(value);
  });
}

export function subtract(a, b) {
  return a - b;
}
