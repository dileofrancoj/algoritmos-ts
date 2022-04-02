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

// 1 -> Agregar un objeto dentro de mi funcion recursiva
// 2 -> Darle valor a ese objeto
// 2.
/*
  {
    3: 2,
    4: 3,
  }
*/
const memoizedFib = (n: number, memo: Record<number, number> = {}): number => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
  return memo[n];
};




// console.log(recursiveFib(50)) // 2**50
console.log(memoizedFib(50)); // O(n)
