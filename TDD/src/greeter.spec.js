/* eslint-disable jest/no-disabled-tests */
import mockdate from 'mockdate';
import greet from './main';

describe.skip('Greeter tests', () => {
  let name;
  let date;
  beforeEach(() => {
    name = 'seppe';
    date = new Date().setHours(13, 0, 0);
    mockdate.set(date);
  });

  test('Should trim input name and give back Hello "name"', () => {
    const greeting = greet('         seppe');

    expect(greeting).toBe('Hello Seppe.');
  });

  test('Should greet with capitalized input name', () => {
    const greeting = greet(name);

    expect(greeting).toBe('Hello Seppe.');
  });

  test('Should say "Good Morning \'name\'" if time is 06:00 ', () => {
    date = new Date().setHours(6, 0, 0);
    mockdate.set(date);

    const greeting = greet(name);

    expect(greeting).toBe('Good morning Seppe.');
  });

  test('Should say "Good Morning \'name\'" if time is 11:59:59:999 ', () => {
    date = new Date().setHours(11, 59, 59, 999);
    mockdate.set(date);

    const greeting = greet(name);

    expect(greeting).toBe('Good morning Seppe.');
  });

  test('Should say "Good evening \'name\'" if time is 18:00 ', () => {
    date = new Date().setHours(18, 0, 0);
    mockdate.set(date);

    const greeting = greet(name);

    expect(greeting).toBe('Good evening Seppe.');
  });

  test('Should say "Good evening \'name\'" if time is 21:59:59:999 ', () => {
    date = new Date().setHours(21, 59, 59, 999);
    mockdate.set(date);

    const greeting = greet(name);

    expect(greeting).toBe('Good evening Seppe.');
  });

  test('Should say "Good night \'name\'" if time is 22:00 ', () => {
    date = new Date().setHours(22, 0, 0);
    mockdate.set(date);

    const greeting = greet(name);

    expect(greeting).toBe('Good night Seppe.');
  });

  test('Should say "Good night \'name\'" if time is 5:59:59:999 ', () => {
    date = new Date().setHours(5, 59, 59, 999);
    mockdate.set(date);

    const greeting = greet(name);

    expect(greeting).toBe('Good night Seppe.');
  });
});
