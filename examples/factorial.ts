// Caso base / Condición corte
// -> 1! -> 1 y 0! -> 1
// 6 --> 6 x 5!
const factorial = (n: number): number => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(3)); // 3 x 2 x 1
console.log(factorial(6));
