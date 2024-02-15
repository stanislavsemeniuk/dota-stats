import useSWR from 'swr';

import { fetcher, apiUrl, revalidateProperties } from '../helpers/api';
import { IHero, IHeroMatchup } from '../types/heroes';

export function useHeroes() {
  const {
    data: heroesStats,
    error,
    isLoading,
  } = useSWR<IHero[]>(`${apiUrl}/heroStats`, fetcher, revalidateProperties);
  return { heroesStats, error, isLoading };
}

export function useHeroMatchup(heroId: number) {
  const {
    data: matchups,
    error,
    isLoading,
  } = useSWR<IHeroMatchup[]>(`${apiUrl}/heroes/${heroId}/matchups`, fetcher, revalidateProperties);
  return { matchups, error, isLoading };
}
