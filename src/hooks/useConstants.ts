import useSWR from 'swr';

import { apiUrl } from '../helpers/api';
import { IItems, IGameModes, IHeroesData } from '../types/constants';

export function useAllItems(){
    const {data: items, error, isLoading} = useSWR<IItems>(`${apiUrl}/constants/items`)
    return { items, error, isLoading };
}

export function useAllGameModes(){
    const {data: gameModes, error, isLoading} = useSWR<IGameModes>(`${apiUrl}/constants/game_mode`)
    return { gameModes, error, isLoading };
}

export function useAllHeroes() {
    const {data: heroes, error, isLoading} = useSWR<IHeroesData>(`${apiUrl}/constants/heroes`)
    return { heroes, error, isLoading };
  }