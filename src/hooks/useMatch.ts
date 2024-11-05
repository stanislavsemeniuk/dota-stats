import useSWR from 'swr';

import { apiUrl } from '../helpers/api';
import { IMatchFullInfo } from '../types/matches';

export default function useMatchInfo(matchId: number) {
  const {
    data: matchInfo,
    error,
    isLoading,
  } = useSWR<IMatchFullInfo>(`${apiUrl}/matches/${matchId}`);
  return { matchInfo, error, isLoading };
}
