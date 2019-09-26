export default function greet(name) {
  const trimmedName = name.trim();
  const nameCapitalized = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1);
  const today = new Date();
  const hours = today.getHours();

  if (hours >= 6 && hours < 12) {
    return `Good morning ${nameCapitalized}.`;
  }

  if (hours >= 18 && hours < 22) {
    return `Good evening ${nameCapitalized}.`;
  }

  if (hours >= 22 || hours < 6) {
    return `Good night ${nameCapitalized}.`;
  }

  return `Hello ${nameCapitalized}.`;
}

// greet('Seppe');
