import React from 'react';
import { Link } from 'react-router-dom';

import { IPlayerTeammate } from '../../types/player';
import { countWinRate } from '../../helpers/calculations';

import styles from './teammate.module.css';

function Teammate({ personaname, avatar, account_id, with_games, with_win }: IPlayerTeammate) {
  const winRate = countWinRate(with_win, with_games);
  return (
    <Link to={`/players/${account_id}`} className={styles.teammate}>
      <div className={styles.avatar}>
        <img src={avatar} alt={`${personaname} avatar`} />
      </div>
      <div className={styles.name}>{personaname}</div>
      <div className={styles.games}>{with_games}</div>
      <div className={styles.wins}>{with_win}</div>
      <div className={styles.winRate}>{winRate}%</div>
    </Link>
  );
}

export { Teammate };
