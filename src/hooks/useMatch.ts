import useSWR from 'swr';

import { fetcher, apiUrl, revalidateProperties } from '../helpers/api';
import { IMatchFullInfo } from '../types/matches';

export default function useMatchInfo(matchId: number) {
  const {
    data: matchInfo,
    error,
    isLoading,
  } = useSWR<IMatchFullInfo>(`${apiUrl}matches/${matchId}`, fetcher, revalidateProperties);
  return { matchInfo, error, isLoading };
}
