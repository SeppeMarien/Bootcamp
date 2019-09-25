/* eslint-disable jest/no-disabled-tests */
import { sum, subtract } from './calc';

describe.skip('calculator', () => {
  // Tests for sum
  test('sum', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test('sum with string numbers', () => {
    const result = sum('1', '2');
    expect(result).toBe(3);
  });

  test('sum with only one variable', () => {
    const result = sum(1);
    expect(result).toBe(1);
  });

  test('sum with more then 2 vars', () => {
    const result = sum(1, 2, 3, 4);
    expect(result).toBe(10);
  });

  test('sum with an array', () => {
    const result = sum([1, 2, 3, 4]);
    expect(result).toBe(10);
  });

  test('sum with non number string', () => {
    const result = () => sum('This', 'is not possible!');
    expect(result).toThrow();
  });

  test('subtract', () => {
    const result = subtract(3, 2);
    expect(result).toBe(1);
  });
});
