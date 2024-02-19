import React from 'react';
import { Link } from 'react-router-dom';
import { createHeroImageLink } from '../../../../../helpers/assets';
import { findHeroInfo } from '../../../../../helpers/static';

import { IPlayerMatch } from '../../../../../types/player';

import styles from '../../player.module.css';

export default function PlayerMatch({
  match_id,
  hero_id,
  kills,
  deaths,
  assists,
  radiant_win,
  game_mode,
  duration,
  player_slot,
}: IPlayerMatch) {
  const isWin = player_slot < 5 ? radiant_win : !radiant_win;
  const hero = findHeroInfo(hero_id);
  return (
    <Link to={`/mathes/${match_id}`} className={styles.tableElement}>
      <div className={styles.tabelFirstTextColumn}>
        {isWin ? (
          <span className={styles.win}>Win</span>
        ) : (
          <span className={styles.lose}>Lose</span>
        )}
      </div>
      <div className={styles.flexColumn}>
        <div className={styles.tableAvatar}>
          <img src={createHeroImageLink(hero?.name || '')} alt="Hero" />
        </div>
        {hero?.localized_name}
      </div>
      <div>
        {kills} / {deaths} / {assists}
      </div>
      <div>{game_mode}</div>
      <div>{duration}</div>
    </Link>
  );
}
