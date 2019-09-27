import snail from './Snail/snail';

export default function greet(name) {
  const trimmedName = name.trim();
  const nameCapitalized = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
  const today = new Date();
  const hours = today.getHours();
  let greeting = `Hello`;

  if (hours >= 6 && hours < 12) {
    greeting = `Good morning`;
  }

  if (hours >= 18 && hours < 22) {
    greeting = `Good evening`;
  }

  if (hours >= 22 || hours < 6) {
    greeting = `Good night`;
  }

  return `${greeting} ${nameCapitalized}.`;
}

//snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
snail([
  [1, 2, 3, 4],
  [3, 4, 5, 6],
  [2, 7, 8, 9],
  [2, 7, 8, 9]]);
