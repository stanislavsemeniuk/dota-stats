import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { usePlayerShortInfo, usePlayerWinrate } from '../../../hooks/usePlayer';
import { countWinRate } from '../../../helpers/calculations';

import styles from './player.module.css';

function Player() {
  const { playerId } = useParams();
  const { playerShortInfo } = usePlayerShortInfo(Number(playerId));
  const { playerWinRate } = usePlayerWinrate(Number(playerId));

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.info}>
          <div className={styles.avatar}>
            <img src={playerShortInfo?.profile.avatarfull} alt="Player avatar" />
          </div>
          <div className={styles.text}>
            <h3 className={styles.name}>{playerShortInfo?.profile.personaname}</h3>
            <div className={styles.winRate}>
              <span className={styles.win}>{playerWinRate?.win}</span>-
              <span className={styles.lose}>{playerWinRate?.lose}</span>
            </div>
            <div className={styles.winRatePercents}>
              {playerWinRate && countWinRate(playerWinRate.win, playerWinRate.lose) + '%'}
            </div>
          </div>
        </div>
        <div className={styles.rank}>{playerShortInfo?.rank_tier}</div>
      </div>
      <div className={styles.navbar}>
        <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="" end>
          Overview
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="heroes">
          Heroes
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="teammates">
          Teammates
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export { Player };
