export function countWinRateWithoutTotalGames(wins: number, loses: number): number {
  if (wins === 0) return 0;
  return Number(((wins / (loses + wins)) * 100).toFixed(2));
}

export function countWinRate(wins: number, games: number): number {
  if (wins === 0 || games === 0) return 0;
  return Number(((wins / games) * 100).toFixed(2));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function convertSecondsToMinutesString(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const minutesString = String(minutes).padStart(2, '0');
  const secondsString = String(remainingSeconds).padStart(2, '0');

  return `${minutesString}:${secondsString}`;
}
