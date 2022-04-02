// cantidad de escalones -> n
// cantidad maxima de escalones a subir (al mismo tiempo) 2

// Interfaz: Contrato en que la función / clase debe incluir lo definido en la interfaz

interface iStepsPermutation {
  n: number;
  memo?: Record<number, number>;
}
/*
    {
        3 : 3,
        4: 5,
        5: 8
    }
*/

// Brute force: O(2**n) -> Memoized way : O(n)
const stepsPermutation = ({ n, memo = {} }: iStepsPermutation): number => {
  // stepsQuantity = 2;
  if (n in memo) return memo[n];
  if (n === 1) return 1;
  if (n === 2) return 2;
  memo[n] = stepsPermutation({ n: n - 1 }) + stepsPermutation({ n: n - 2 });
  return memo[n];
};
