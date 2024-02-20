import React from 'react';

import { IPlayerHero } from '../../../../../types/player';
import { assetsUrl } from '../../../../../helpers/assets';
import { findHeroInfo } from '../../../../../static/heroes';
import { countWinRate } from '../../../../../helpers/calculations';

import styles from '../../player.module.css';
import { Link } from 'react-router-dom';

function PlayerHero({ hero_id, games, win }: IPlayerHero) {
  const hero = findHeroInfo(hero_id);
  return (
    <Link to={`/heroes/${hero_id}`} className={styles.tableElement}>
      <div className={styles.tableAvatar}>
        <img src={`${assetsUrl}${hero?.img}` || ''} alt="Hero" />
      </div>
      <div className={styles.tableName}>{hero?.localized_name}</div>
      <div className={styles.tableGames}>{games}</div>
      <div className={styles.tableWins}>{win}</div>
      <div className={styles.tableWinRate}>{countWinRate(win, games) || 0}%</div>
    </Link>
  );
}

export { PlayerHero };
