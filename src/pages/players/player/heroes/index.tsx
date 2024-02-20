import React from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import { usePlayerHeroes } from '../../../../hooks/usePlayer';
import { PlayerHero } from '../components/player-hero';

import styles from '../player.module.css';

function PlayerHeroes() {
  const { playerId } = useParams();
  const { heroes } = usePlayerHeroes(Number(playerId));
  const [searchParams, setSearchParams] = useSearchParams();

  if (!heroes) {
    return null;
  }

  function handleSort(sortValue: string) {
    if (searchParams.get('sort') === sortValue) setSearchParams({});
    else setSearchParams({ sort: sortValue });
  }

  return (
    <div>
      <div className={styles.tableWrapper}>
        <div className={styles.tableHeader}>
          <div></div>
          <div>Name</div>
          <div className={styles.sortButton} onClick={() => handleSort('games')}>
            Games
          </div>
          <div className={styles.sortButton} onClick={() => handleSort('wins')}>
            Wins
          </div>
          <div className={styles.sortButton} onClick={() => handleSort('winRate')}>
            Winrate
          </div>
        </div>
        {heroes.map(({ hero_id, games, win }, index) => (
          <PlayerHero key={index} hero_id={hero_id} games={games} win={win} />
        ))}
      </div>
    </div>
  );
}

export { PlayerHeroes };
