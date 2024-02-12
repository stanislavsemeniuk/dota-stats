import useSWR from 'swr';

import { fetcher, apiUrl } from '../helpers/api';
import { Hero, HeroMatchup } from '../types/heroes';

export function useHeroes() {
  const {
    data: heroesStats,
    error,
    isLoading,
  } = useSWR<Hero[]>(`${apiUrl}/heroStats`, fetcher, {
    refreshInterval: 24 * 60 * 60 * 1000, // 24 часа в миллисекундах
    revalidateOnMount: false,
    revalidateOnFocus: false,
  });
  return { heroesStats, error, isLoading };
}

export function useHeroMatchup(heroId: number) {
  const {
    data: matchups,
    error,
    isLoading,
  } = useSWR<HeroMatchup[]>(`${apiUrl}/heroes/${heroId}/matchups`, fetcher);
  return { matchups, error, isLoading };
}
