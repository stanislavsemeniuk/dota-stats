import useSWR from 'swr';

import { fetcher, apiUrl } from '../helpers/api';
import { MatchFullInfo } from '../types/mathes';

export default function useMatchInfo(matchId: number) {
  const {
    data: matchInfo,
    error,
    isLoading,
  } = useSWR<MatchFullInfo>(`${apiUrl}matches/${matchId}`, fetcher);
  return { matchInfo, error, isLoading };
}
