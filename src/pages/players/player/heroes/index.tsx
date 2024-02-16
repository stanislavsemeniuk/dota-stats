import React from 'react';
import { useParams } from 'react-router-dom';

import { usePlayerHeroes } from '../../../../hooks/usePlayer';
import { PlayerHero } from '../components/player-hero';

import styles from '../player.module.css';

function PlayerHeroes() {
  const { playerId } = useParams();
  const { heroes } = usePlayerHeroes(Number(playerId));

  return (
    <div>
      <div className={styles.tableWrapper}>
        <div className={styles.tableHeader}>
          <div></div>
          <div>Name</div>
          <div>Games</div>
          <div>Wins</div>
          <div>Winrate</div>
        </div>
        {heroes &&
          heroes.length > 1 &&
          heroes.map(({ hero_id, games, win }, index) => (
            <PlayerHero key={index} hero_id={hero_id} games={games} win={win} />
          ))}
      </div>
    </div>
  );
}

export { PlayerHeroes };
