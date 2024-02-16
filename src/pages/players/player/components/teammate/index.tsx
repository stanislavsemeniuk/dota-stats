import React from 'react';
import { Link } from 'react-router-dom';

import { IPlayerTeammate } from '../../../../../types/player';
import { countWinRate } from '../../../../../helpers/calculations';

import styles from '../../player.module.css';

function Teammate({ personaname, avatarfull, account_id, with_games, with_win }: IPlayerTeammate) {
  const winRate = countWinRate(with_win, with_games);
  return (
    <Link to={`/players/${account_id}`} className={styles.tableElement}>
      <div className={styles.tableAvatar}>
        <img src={avatarfull} alt={`${personaname} avatar`} />
      </div>
      <div className={styles.tableName}>{personaname}</div>
      <div className={styles.tableGames}>{with_games}</div>
      <div className={styles.tableWins}>{with_win}</div>
      <div className={styles.tableWinRate}>{winRate}%</div>
    </Link>
  );
}

export { Teammate };
