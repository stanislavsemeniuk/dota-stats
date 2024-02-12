import useSWR from 'swr';

import { fetcher, apiUrl } from '../helpers/api';
import { Hero, HeroStats, HeroMatchup } from '../types/heroes';

export function useHeroes() {
  const { data: heroes, error, isLoading } = useSWR<Hero[]>(`${apiUrl}/heroes`, fetcher);
  return { heroes, error, isLoading };
}

export function useHeroesStats() {
  const {
    data: heroesStats,
    error,
    isLoading,
  } = useSWR<HeroStats[]>(`${apiUrl}/heroStats`, fetcher);
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
