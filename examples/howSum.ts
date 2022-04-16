const howSum = (
  targetSum: number,
  numbers: number[],
  memo: Record<number, number[]> = {}
): any => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderArray = howSum(remainder, numbers, memo);
    // Todos los numeros de la llamada recursiva en forma de vector
    // [], null
    if (remainderArray) {
      // quiere decir que el targetSum no es menor a 0 por lo tanto puedo generar un caso base.
      memo[targetSum] = [...remainderArray, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = [];
  return memo[targetSum];
};

console.log(howSum(8, [5, 3, 2]));
