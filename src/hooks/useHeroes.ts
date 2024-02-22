import useSWR from 'swr';

import { fetcher, apiUrl, revalidateProperties } from '../helpers/api';
import { IHero, IHeroMatchup, IHeroItems, IHeroRankings } from '../types/heroes';

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

export function useHeroItems(heroId: number) {
  const {
    data: items,
    error,
    isLoading,
  } = useSWR<IHeroItems>(
    `${apiUrl}/heroes/${heroId}/itemPopularity`,
    fetcher,
    revalidateProperties,
  );
  return { items, error, isLoading };
}

export function useHeroBestPlayers(hero_id: number) {
  const { data, error, isLoading } = useSWR<IHeroRankings>(
    `${apiUrl}/rankings?hero_id=${hero_id}`,
    fetcher,
    revalidateProperties,
  );

  const rankings = data?.rankings.filter((el) => el.name !== null);
  return { rankings, error, isLoading };
}
