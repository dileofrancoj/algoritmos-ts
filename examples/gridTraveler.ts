interface iGridTraveler {
  m: number;
  n: number;
}

interface iMemoizedGridTraveler extends iGridTraveler {
  memo?: Record<string, number>;
}

// 1 caso grid traveler brute force (sin memoization) implements iGridTraveler
// 2 caso grid traveler memorizado implements i memoizedGridTraveler
/*

    {
        2,2 : 2
    }
*/
// Solución por fuerza bruta -> O(2 ** n+m)
// Solución por memorización
// ej: 3x3
// m : [0,1,2,3]
// n : [0,1,2,3]
// Combinatorio cantidad de combinaciones: m * n
// O(n*m)
const gridTraveler = ({ m, n, memo = {} }: iMemoizedGridTraveler): number => {
  const key = `${m},${n}`;
  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;
  memo[key] =
    gridTraveler({ m: m - 1, n, memo }) + gridTraveler({ m, n: n - 1, memo });
  return memo[key];
};

console.log(gridTraveler({ m: 10, n: 5 }));
