import useSWR from 'swr';

import { fetcher, apiUrl } from '../helpers/api';
import { IHero, IHeroMatchup } from '../types/heroes';

export function useHeroes() {
  const {
    data: heroesStats,
    error,
    isLoading,
  } = useSWR<IHero[]>(`${apiUrl}/heroStats`, fetcher, {
    refreshInterval: 24 * 60 * 60 * 1000,
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
  } = useSWR<IHeroMatchup[]>(`${apiUrl}/heroes/${heroId}/matchups`, fetcher);
  return { matchups, error, isLoading };
}
