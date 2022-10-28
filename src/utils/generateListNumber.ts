export function generateListNumber(length: number, startFrom?: number) {
  let numbers = [];
  for (let i = startFrom || 0; i < length; i++) {
    numbers.push(i);
  }
  return numbers;
}
