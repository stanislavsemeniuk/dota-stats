import useSWR from 'swr';

import { fetcher, apiUrl } from '../helpers/api';
import { Hero } from '../types';

export default function useHeroes() {
  const { data: heroes, error, isLoading } = useSWR<Hero[]>(`${apiUrl}/heroes`, fetcher);
  return { heroes, error, isLoading };
}
