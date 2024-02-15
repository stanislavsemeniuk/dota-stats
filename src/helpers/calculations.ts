export function countWinRate(wins: number, loses: number) {
  return ((wins / (loses + wins)) * 100).toFixed(2);
}
