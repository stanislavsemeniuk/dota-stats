import useSWR from 'swr';

import { apiUrl } from '../helpers/api';
import {
  IPlayerInfo,
  IPlayerWinrate,
  IPlayerMatch,
  IPlayerTeammate,
  IPlayerHero,
} from '../types/player';

export function usePlayerShortInfo(accountId: number) {
  const {
    data: playerShortInfo,
    error,
    isLoading,
  } = useSWR<IPlayerInfo>(`${apiUrl}/players/${accountId}`);
  return { playerShortInfo, error, isLoading };
}

export function usePlayerWinrate(accountId: number) {
  const {
    data: playerWinRate,
    error,
    isLoading,
  } = useSWR<IPlayerWinrate>(`${apiUrl}/players/${accountId}/wl`);
  return { playerWinRate, error, isLoading };
}

export function usePlayerHeroes(accountId: number) {
  const {
    data: heroes,
    error,
    isLoading,
  } = useSWR<IPlayerHero[]>(
    `${apiUrl}/players/${accountId}/heroes?having=1`
  );
  return { heroes, error, isLoading };
}

export function usePlayerRecentMatches(accountId: number) {
  const {
    data: recentMatches,
    error,
    isLoading,
  } = useSWR<IPlayerMatch[]>(
    `${apiUrl}/players/${accountId}/recentMatches`
  );
  return { recentMatches, error, isLoading };
}

export function usePlayerTeammates(accountId: number) {
  const {
    data: teammates,
    error,
    isLoading,
  } = useSWR<IPlayerTeammate[]>(
    `${apiUrl}/players/${accountId}/peers`
  );
  return { teammates, error, isLoading };
}

export function usePlayerHeroMatches(accountId: number, hero_id: number) {
  const {
    data: heroMatches,
    error,
    isLoading,
  } = useSWR<IPlayerMatch[]>(
    `${apiUrl}/players/${accountId}/matches?hero_id=${hero_id}`
  );
  return { heroMatches, error, isLoading };
}

export function usePlayerMatches(accountId: number) {
  //TODO: Create pagination and limit
}
