import useSWR from 'swr';

import { fetcher, apiUrl } from '../helpers/api';
import { IMatchFullInfo } from '../types/matches';

export default function useMatchInfo(matchId: number) {
  const {
    data: matchInfo,
    error,
    isLoading,
  } = useSWR<IMatchFullInfo>(`${apiUrl}matches/${matchId}`, fetcher);
  return { matchInfo, error, isLoading };
}
