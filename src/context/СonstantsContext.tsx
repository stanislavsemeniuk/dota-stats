import React, { createContext, useContext } from 'react';
import { useAllGameModes, useAllHeroes, useAllItems } from '../hooks/useConstants';
import { ISingleGameMode, ISingleHero, ISingleItem } from '../types/constants';

interface ConstantsContextType {
    findItemsInfo: (id:string) => ISingleItem | undefined,
    findHeroInfo: (id:number) => ISingleHero | undefined,
    getGameModeName: (id:number)=> string | undefined
}

const ConstantsContext = createContext<ConstantsContextType | undefined>(undefined);

export default function ConstantsContextProvider({ children }: { children: React.ReactNode }) {
   const { items, error: itemsError, isLoading: itemsLoading } = useAllItems()
   const { heroes, error: heroesError, isLoading: heroesLoading } = useAllHeroes()
   const { gameModes, error: gameModesError, isLoading: gameModesLoading } = useAllGameModes()

   function findItemsInfo(id: string) {
    if(!items) return undefined;
    return Object.values(items).find(item => item.id === Number(id));
   }

   function findHeroInfo(id: number) {
    if(!heroes) return undefined;
    return heroes[id]
   }

   function findGameModeInfo(id: number) {
    if(!gameModes) return undefined;
    return gameModes[id]?.name;
  }
  
  function extractGameModeName(fullName: string) {
    const index = fullName.indexOf('game_mode_');
    if (index !== -1) return fullName.slice(index + 'game_mode_'.length);
    else return '';
  }
  
  function localizeGameModeName(name: string) {
    return name.replace('_', ' ');
  }

  function getGameModeName(id: number){
    if(!gameModes) return undefined;
    return localizeGameModeName(extractGameModeName(findGameModeInfo(id) || ''));
  } 

  return (
    <ConstantsContext.Provider value={{ findItemsInfo, findHeroInfo, getGameModeName  }}>
      {children}
    </ConstantsContext.Provider>
  );
}

export function useConstantsContext() {
    const context = useContext(ConstantsContext);
    if (!context) {
      throw new Error('ConstantsContext should be used within a ConstantsContextProvider');
    }
    return context;
  }