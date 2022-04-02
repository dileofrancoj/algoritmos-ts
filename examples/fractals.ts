// O(n)

function fractal(n: number): number {
  if (n === 1) return 1;
  return fractal(n - 1) + (n - 1) * 4;
}
