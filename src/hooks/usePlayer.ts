import useSWR from 'swr';

import { fetcher, apiUrl } from '../helpers/api';
import {
  PlayerInfo,
  PlayerWinrate,
  PlayerMatch,
  PlayerTeammate,
  PlayerHeroes,
} from '../types/player';

export function usePlayerShortInfo(accountId: number) {
  const {
    data: playerShort,
    error,
    isLoading,
  } = useSWR<PlayerInfo>(`${apiUrl}/players/${accountId}`, fetcher);
  return { playerShort, error, isLoading };
}

export function usePlayerWinrate(accountId: number) {
  const {
    data: playerWinRate,
    error,
    isLoading,
  } = useSWR<PlayerWinrate>(`${apiUrl}/players/${accountId}/wl`, fetcher);
  return { playerWinRate, error, isLoading };
}

export function usePlayerHeroes(accountId: number) {
  const {
    data: heroes,
    error,
    isLoading,
  } = useSWR<PlayerHeroes>(`${apiUrl}players/${accountId}/heroes`, fetcher);
  return { heroes, error, isLoading };
}

export function usePlayerRecentMatches(accountId: number) {
  const {
    data: recentMatches,
    error,
    isLoading,
  } = useSWR<PlayerMatch[]>(`${apiUrl}/players/${accountId}/recentMatches`, fetcher);
  return { recentMatches, error, isLoading };
}

export function usePlayerTeammates(accountId: number) {
  const {
    data: teammates,
    error,
    isLoading,
  } = useSWR<PlayerTeammate>(`${apiUrl}/players/${accountId}/peers`, fetcher);
  return { teammates, error, isLoading };
}

export function usePlayerMatches(accountId: number) {
  //TODO: Create pagination and limit
}
