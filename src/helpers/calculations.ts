export function countWinRateWithoutTotalGames(wins: number, loses: number) {
  return ((wins / (loses + wins)) * 100).toFixed(2);
}

export function countWinRate(wins: number, games: number) {
  return ((wins / games) * 100).toFixed(2);
}
