import useSWR from 'swr';

import { fetcher, apiUrl } from '../helpers/api';
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
  } = useSWR<IPlayerInfo>(`${apiUrl}/players/${accountId}`, fetcher);
  return { playerShortInfo, error, isLoading };
}

export function usePlayerWinrate(accountId: number) {
  const {
    data: playerWinRate,
    error,
    isLoading,
  } = useSWR<IPlayerWinrate>(`${apiUrl}/players/${accountId}/wl`, fetcher);
  return { playerWinRate, error, isLoading };
}

export function usePlayerHeroes(accountId: number) {
  const {
    data: heroes,
    error,
    isLoading,
  } = useSWR<IPlayerHero[]>(`${apiUrl}/players/${accountId}/heroes`, fetcher);
  return { heroes, error, isLoading };
}

export function usePlayerRecentMatches(accountId: number) {
  const {
    data: recentMatches,
    error,
    isLoading,
  } = useSWR<IPlayerMatch[]>(`${apiUrl}/players/${accountId}/recentMatches`, fetcher);
  return { recentMatches, error, isLoading };
}

export function usePlayerTeammates(accountId: number) {
  const {
    data: teammates,
    error,
    isLoading,
  } = useSWR<IPlayerTeammate[]>(`${apiUrl}/players/${accountId}/peers`, fetcher);
  return { teammates, error, isLoading };
}

export function usePlayerMatches(accountId: number) {
  //TODO: Create pagination and limit
}
