import useSWR from 'swr';
import { apiUrl } from '../helpers/api';
import { ISearchResult } from '../types/search';

export default function useNameSearch(name: string) {
  const {
    data: users,
    error,
    isLoading,
  } = useSWR<ISearchResult[]>(
    name ? `${apiUrl}/search/?q=${name}` : null
  );

  return { users, error, isLoading };
}
