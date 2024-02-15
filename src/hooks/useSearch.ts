import useSWR from 'swr';
import { fetcher, apiUrl, revalidateProperties } from '../helpers/api';
import { ISearchResult } from '../types/search';

export default function useNameSearch(name: string) {
  const {
    data: users,
    error,
    isLoading,
  } = useSWR<ISearchResult[]>(
    name ? `${apiUrl}/search/?q=${name}` : null,
    fetcher,
    revalidateProperties,
  );

  return { users, error, isLoading };
}
