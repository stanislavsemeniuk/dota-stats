export function countWinRateWithoutTotalGames(wins: number, loses: number) {
  if (wins === 0) return 0;
  return ((wins / (loses + wins)) * 100).toFixed(2);
}

export function countWinRate(wins: number, games: number) {
  if (wins === 0 || games === 0) return 0;
  return ((wins / games) * 100).toFixed(2);
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
