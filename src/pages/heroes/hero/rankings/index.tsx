import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useHeroBestPlayers } from '../../../../hooks/useHeroes';
import { ranks } from '../../../../helpers/assets';

import styles from '../../heroes.module.css';

function HeroRankings() {
  const { heroId } = useParams();
  const { rankings } = useHeroBestPlayers(Number(heroId));

  useEffect(() => {
    console.log(rankings);
  }, [rankings]);

  if (!rankings) {
    return null;
  }

  return (
    <div>
      <div className={styles.heroesWrapper}>
        <div className={styles.bestPlayersHeader}>
          <div></div>
          <div>Player</div>
          <div>Score</div>
          <div>Rank</div>
        </div>
        {rankings.map(({ account_id, name, avatar, score, rank_tier }, index) => (
          <BestHeroPlayer
            position={index + 1}
            rank_tier={rank_tier}
            avatar={avatar}
            name={name || ''}
            score={score}
            account_id={account_id}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

function BestHeroPlayer({
  avatar,
  name,
  score,
  account_id,
  rank_tier,
  position,
}: {
  avatar: string;
  name: string;
  score: number;
  account_id: number;
  rank_tier: number;
  position: number;
}) {
  return (
    <Link to={`/players/${account_id}`} className={styles.bestPlayersElement}>
      <div className={styles.position}>{position}</div>
      <div className={styles.heroesName}>
        <div className={styles.avatar}>
          <img src={avatar} alt="Avatar" />
        </div>
        {name}
      </div>
      <div>{score.toFixed(2)}</div>
      <div className={styles.rank}>
        <img src={ranks[rank_tier.toString()]} alt="Rank" />
      </div>
    </Link>
  );
}

export { HeroRankings };
