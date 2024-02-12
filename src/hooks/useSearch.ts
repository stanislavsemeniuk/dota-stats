import useSWR from 'swr';

import { apiUrl, fetcher } from '../helpers/api';
import { SearchResult } from '../types/search';

export default function useNameSearch(name: string) {
  const {
    data: users,
    error,
    isLoading,
  } = useSWR<SearchResult>(`${apiUrl}/search/?q=${name}`, fetcher);
  return { users, error, isLoading };
}
