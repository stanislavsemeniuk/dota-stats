import React from 'react';

import { IPlayerHero } from '../../../../../types/player';
import { createHeroImageLink } from '../../../../../helpers/assets';
import { findHeroInfo } from '../../../../../helpers/static';
import { countWinRate } from '../../../../../helpers/calculations';

import styles from '../../player.module.css';

function PlayerHero({ hero_id, games, win }: IPlayerHero) {
  const hero = findHeroInfo(hero_id);
  return (
    <div className={styles.tableElement}>
      <div className={styles.tableAvatar}>
        <img src={createHeroImageLink(hero?.name || '')} alt="Hero" />
      </div>
      <div className={styles.tableName}>{hero?.localized_name}</div>
      <div className={styles.tableGames}>{games}</div>
      <div className={styles.tableWins}>{win}</div>
      <div className={styles.tableWinRate}>{countWinRate(win, games) || 0}%</div>
    </div>
  );
}

export { PlayerHero };
