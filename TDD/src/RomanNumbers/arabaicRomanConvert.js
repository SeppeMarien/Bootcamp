/* eslint-disable guard-for-in */
export default function arabicToRoman(number) {
  let arabicNumber = number;
  let romanNumber = '';

  let numberOfTimes;

  const table = {
    M: 1000,
    CM: 900,
    D: 500,
    C: 100,
    XC: 90,
    L: 50,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let lastKey = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const key in table) {
    numberOfTimes = Math.floor(arabicNumber / table[key]);
    if (numberOfTimes >= 1 && numberOfTimes < 4) {
      for (let i = 0; i < numberOfTimes; i++) {
        romanNumber += key;
        arabicNumber -= table[key];
      }
    } else if (numberOfTimes > 3) {
      romanNumber += `${key}${lastKey}`;
      arabicNumber -= table[lastKey] - table[key];
    }
    lastKey = key;
  }

  return romanNumber;
}
