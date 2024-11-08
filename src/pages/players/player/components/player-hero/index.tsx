import React from 'react';

import { IPlayerHero } from '../../../../../types/player';
import { assetsUrl } from '../../../../../helpers/assets';
import { countWinRate } from '../../../../../helpers/calculations';

import styles from '../../player.module.css';
import { Link } from 'react-router-dom';
import { useConstantsContext } from '../../../../../context/СonstantsContext';

function PlayerHero({ hero_id, games, win }: IPlayerHero) {
  const {findHeroInfo} = useConstantsContext()
  const hero = findHeroInfo(hero_id);
  return (
    <Link to={`${hero_id}`} className={styles.tableElement}>
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
