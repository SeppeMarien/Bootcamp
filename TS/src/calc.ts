export function sum(a: number, b: number) {
  return a + b;
}

export async function sumAsync(a: number, b: number): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => resolve(sum(a, b)), 500);
  });
}

export function subtract(a: number, b: number): number {
  return a - b;
}
