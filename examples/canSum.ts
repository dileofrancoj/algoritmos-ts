// targetSum: 1
// numbers: [2,3,5]
// n: array length = 3 --> cantidad de ramificaciones que tiene el arbol
// m: target sum = 8 -> m: es la altura del árbol

// O(n^m) -> 8 ^ 3 = 64*8 (brute force)

const canSum = (targetSum: number, numbers: number[]) => {
  // base cases
  if (targetSum === 0) return true; // base condition
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const result = targetSum - num; // -1
    if (canSum(result, numbers)) return true;
  }
  return false;
};

// memoized: 1. agregar memo a los parametros. 2. preguntar si existe el elemento en el objeto memo. 3. actualizar el objeto memo

// O(m*n) -> tarea
const memoizedCanSum = (
  targetSum: number,
  numbers: number[],
  memo: Record<number, boolean> = {}
) => {
  if (targetSum in memo) return memo[targetSum]; // consulta a la "cache"
  if (targetSum === 0) return true; // base condition
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const result: boolean = memoizedCanSum(remainder, numbers, memo);
    if (result) {
      // actualizar el objeto
      memo[targetSum] = result; // {4: true}
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSum(8, [2, 3, 5]));
console.log(memoizedCanSum(8, [2, 3, 5]));
