/*
    1,1,2,3,5,8,13,21,34 --> Solucion en recurrencia
    an = an-1 + an-2
*/

// O(n)
const commonFib = (n: number): number => {
  const elements: number[] = [1, 1];
  for (let i: number = 2; i < n; i++) {
    const result = elements[i - 1] + elements[i - 2];
    elements.push(result);
  }
  return elements[elements.length - 1];
};

// Ultimo al primero
// O(2 ** n)
const recursiveFib = (n: number): number => {
  if (n <= 2) return 1;
  return recursiveFib(n - 1) + recursiveFib(n - 2);
};
