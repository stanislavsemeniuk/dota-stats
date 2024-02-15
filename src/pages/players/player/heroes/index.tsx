import React from 'react';
import { useParams } from 'react-router-dom';

import { usePlayerHeroes } from '../../../../hooks/usePlayer';
import { PlayerHero } from '../../../../components';

import styles from './player-heroes.module.css';
import playerStyles from '../player.module.css';

function PlayerHeroes() {
  const { playerId } = useParams();
  const { heroes } = usePlayerHeroes(Number(playerId));

  return (
    <div>
      <h4 className={playerStyles.sectionTitle}>Heroes</h4>
      {heroes &&
        heroes.length > 1 &&
        heroes.map(({ hero_id, games, win, last_played }, index) => (
          <PlayerHero
            key={index}
            hero_id={hero_id}
            games={games}
            win={win}
            last_played={last_played}
          />
        ))}
    </div>
  );
}

export { PlayerHeroes };
