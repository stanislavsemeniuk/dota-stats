import React from 'react';

import { useHeroes } from '../../hooks/useHeroes';
import { countWinRate } from '../../helpers/calculations';
import { assetsUrl } from '../../helpers/assets';

import styles from './heroes.module.css';
import { Link } from 'react-router-dom';

function Heroes() {
  const { heroesStats } = useHeroes();
  return (
    <div>
      <h2>Winrates</h2>
      <div className={styles.heroesWrapper}>
        <div className={styles.heroesHeader}>
          <div>Hero</div>
          <div>Start</div>
          <div>Current</div>
          <div>Change</div>
        </div>
        {heroesStats &&
          heroesStats.map(({ img, localized_name, pub_pick_trend, pub_win_trend, id }, index) => (
            <HeroWinrateRow
              img={img}
              localized_name={localized_name}
              key={index}
              heroId={id}
              start={countWinRate(pub_win_trend[0], pub_pick_trend[0])}
              current={countWinRate(
                pub_win_trend[pub_win_trend.length - 1],
                pub_pick_trend[pub_pick_trend.length - 1],
              )}
            />
          ))}
      </div>
    </div>
  );
}

function HeroWinrateRow({
  img,
  localized_name,
  start,
  current,
  heroId,
}: {
  img: string;
  localized_name: string;
  start: number;
  current: number;
  heroId: string;
}) {
  const change = current - start;

  return (
    <Link to={`/heroes/${heroId}`} className={styles.heroesElement}>
      <div className={styles.heroesName}>
        <div className={styles.avatar}>
          <img src={`${assetsUrl}${img}`} alt="Avatar" />
        </div>
        {localized_name}
      </div>
      <div className={start >= 50 ? styles.win : styles.lose}>{start}%</div>
      <div className={current >= 50 ? styles.win : styles.lose}>{current}%</div>
      <div className={change >= 0 ? styles.win : styles.lose}>{change.toFixed(2)}%</div>
    </Link>
  );
}

export { Heroes };
