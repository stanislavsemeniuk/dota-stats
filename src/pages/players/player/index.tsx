import React from 'react';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { usePlayerShortInfo, usePlayerWinrate } from '../../../hooks/usePlayer';
import { countWinRateWithoutTotalGames } from '../../../helpers/calculations';
import { ranks } from '../../../helpers/assets';

import styles from './player.module.css';
import { NavBar } from '../../../components';

function Player() {
  const { playerId } = useParams();
  const { playerShortInfo } = usePlayerShortInfo(Number(playerId));
  const { playerWinRate } = usePlayerWinrate(Number(playerId));

  if (!playerWinRate || !playerShortInfo) {
    return null;
  }

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
              {countWinRateWithoutTotalGames(playerWinRate.win, playerWinRate.lose) + '%'}
            </div>
          </div>
        </div>
        <div className={styles.rank}>
          <img src={ranks[playerShortInfo.rank_tier.toString()]} alt="Rank" />
        </div>
      </div>
      <NavBar
        links={[
          { href: '', text: 'Overview' },
          { href: 'heroes', text: 'Heroes' },
          { href: 'teammates', text: 'Teammates' },
        ]}
      />
      <Outlet />
    </div>
  );
}

export { Player };
