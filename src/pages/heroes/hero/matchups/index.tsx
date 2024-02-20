import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useHeroMatchup } from '../../../../hooks/useHeroes';
import { findHeroInfo } from '../../../../static/heroes';
import { assetsUrl } from '../../../../helpers/assets';

import styles from '../../heroes.module.css';
import { countWinRate } from '../../../../helpers/calculations';

function HeroMatchups() {
  const { heroId } = useParams();
  const { matchups } = useHeroMatchup(Number(heroId));
  if (!matchups) {
    return null;
  }
  return (
    <div>
      <div className={styles.heroesWrapper}>
        <div className={styles.heroesHeader}>
          <div>Hero</div>
          <div>Games</div>
          <div>Wins</div>
          <div>Win rate</div>
        </div>
        {matchups.map(({ games_played, wins, hero_id }, index) => (
          <HeroMatchUp key={index} heroId={hero_id} games={games_played} wins={wins} />
        ))}
      </div>
    </div>
  );
}

function HeroMatchUp({ heroId, games, wins }: { heroId: number; games: number; wins: number }) {
  const hero = findHeroInfo(heroId);
  const winRate = countWinRate(wins, games);
  if (!hero) {
    return null;
  }
  return (
    <Link to={`/heroes/${heroId}`} className={styles.heroesElement}>
      <div className={styles.heroesName}>
        <div className={styles.avatar}>
          <img src={`${assetsUrl}${hero.img}`} alt="Avatar" />
        </div>
        {hero.localized_name}
      </div>
      <div>{games}</div>
      <div>{wins}</div>
      <div className={winRate >= 50 ? styles.win : styles.lose}>{winRate}%</div>
    </Link>
  );
}

export { HeroMatchups };
