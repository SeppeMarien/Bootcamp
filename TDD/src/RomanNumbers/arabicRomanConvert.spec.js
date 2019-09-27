/* eslint-disable jest/no-disabled-tests */
import arabicToRoman from './arabaicRomanConvert';

describe.skip('Arabic/roman convert', () => {
  describe('Arabic to roman convert', () => {
    test('Should return I', () => {
      const romanValue = arabicToRoman(1);

      expect(romanValue).toBe('I');
    });

    test('Should return IV', () => {
      const romanValue = arabicToRoman(4);

      expect(romanValue).toBe('IV');
    });

    test('Should return V', () => {
      const romanValue = arabicToRoman(5);

      expect(romanValue).toBe('V');
    });

    test('Should return VII', () => {
      const romanValue = arabicToRoman(7);

      expect(romanValue).toBe('VII');
    });
    test('Should return IX', () => {
      const romanValue = arabicToRoman(9);

      expect(romanValue).toBe('IX');
    });

    test('Should return XIV', () => {
      const romanValue = arabicToRoman(14);

      expect(romanValue).toBe('XIV');
    });

    test('Should return XXX', () => {
      const romanValue = arabicToRoman(30);

      expect(romanValue).toBe('XXX');
    });

    test('Should return XLIV', () => {
      const romanValue = arabicToRoman(44);

      expect(romanValue).toBe('XLIV');
    });

    test('Should return LXXXVIII', () => {
      const romanValue = arabicToRoman(88);

      expect(romanValue).toBe('LXXXVIII');
    });

    test('Should return C', () => {
      const romanValue = arabicToRoman(100);

      expect(romanValue).toBe('C');
    });

    test('Should return CCLV', () => {
      const romanValue = arabicToRoman(255);

      expect(romanValue).toBe('CCLV');
    });

    test('Should return CDLI', () => {
      const romanValue = arabicToRoman(451);

      expect(romanValue).toBe('CDLI');
    });

    test('Should return DCLXVI', () => {
      const romanValue = arabicToRoman(666);

      expect(romanValue).toBe('DCLXVI');
    });

    test('Should return M', () => {
      const romanValue = arabicToRoman(1000);

      expect(romanValue).toBe('M');
    });

    test('Should return MMMCMXCIX', () => {
      const romanValue = arabicToRoman(3999);

      expect(romanValue).toBe('MMMCMXCIX');
    });
  });
});
