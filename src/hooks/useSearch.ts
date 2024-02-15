import useSWR from 'swr';
import { fetcher, apiUrl } from '../helpers/api';
import { ISearchResult } from '../types/search';

export default function useNameSearch(name: string) {
  const {
    data: users,
    error,
    isLoading,
  } = useSWR<ISearchResult[]>(name ? `${apiUrl}/search/?q=${name}` : null, fetcher, {
    revalidateOnMount: true,
    revalidateOnFocus: false,
    refreshInterval: 24 * 60 * 60 * 1000,
  });

  return { users, error, isLoading };
}
