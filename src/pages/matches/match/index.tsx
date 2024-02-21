import React from 'react';
import { Link, useParams } from 'react-router-dom';

import useMatchInfo from '../../../hooks/useMatch';
import { convertSecondsToMinutesString } from '../../../helpers/calculations';
import { usePlayerShortInfo } from '../../../hooks/usePlayer';

import styles from './match.module.css';
import { findHeroInfo } from '../../../static/heroes';
import { findItemsInfo } from '../../../static/items';
import { assetsUrl } from '../../../helpers/assets';
import { IMatchPlayer } from '../../../types/matches';

function Match() {
  const { matchId } = useParams();
  const { matchInfo } = useMatchInfo(Number(matchId));
  if (!matchInfo) {
    return null;
  }

  const radiantPlayers = matchInfo.players.filter((player) => player.team_number === 0);
  const direPlayers = matchInfo.players.filter((player) => player.team_number === 1);
  return (
    <div>
      <div className={styles.header}>
        <div
          className={[
            styles.victorySide,
            matchInfo.radiant_win ? styles.radiant : styles.dire,
          ].join(' ')}>
          {matchInfo.radiant_win ? 'Radiant' : 'Dire'} victory
        </div>
        <div className={styles.score}>
          <span className={[styles.radiantScore, styles.radiant].join(' ')}>
            {matchInfo.radiant_score}
          </span>
          <span className={styles.duration}>
            {convertSecondsToMinutesString(matchInfo.duration)}
          </span>
          <span className={[styles.direScore, styles.dire].join(' ')}>{matchInfo.dire_score}</span>
        </div>
      </div>
      <TeamPlayersColumn name="Radiant" players={radiantPlayers} />
      <TeamPlayersColumn name="Dire" players={direPlayers} />
    </div>
  );
}

function TeamPlayersColumn({
  name,
  players,
}: {
  name: 'Radiant' | 'Dire';
  players: IMatchPlayer[];
}) {
  return (
    <>
      <div className={[styles.team, name === 'Radiant' ? styles.radiant : styles.dire].join(' ')}>
        {name} team
      </div>
      <div className={styles.players}>
        <div className={styles.playersHeader}>
          <div>Hero</div>
          <div>Player</div>
          <div>KDA</div>
          <div>Net worth</div>
          <div>LH / DN</div>
          <div>GPM / XPM</div>
          <div>Damage</div>
          <div>Items:</div>
        </div>
        {players.map(
          (
            {
              account_id,
              hero_id,
              kills,
              assists,
              deaths,
              net_worth,
              last_hits,
              denies,
              gold_per_min,
              xp_per_min,
              hero_damage,
              tower_damage,
              item_0,
              item_1,
              item_2,
              item_3,
              item_4,
              item_5,
              item_neutral,
            },
            index,
          ) => (
            <MatchPlayer
              key={index}
              accountId={account_id}
              heroId={hero_id}
              kills={kills}
              assists={assists}
              deaths={deaths}
              net_worth={net_worth}
              last_hits={last_hits}
              denies={denies}
              gpm={gold_per_min}
              xpm={xp_per_min}
              damage={hero_damage}
              towerDamage={tower_damage}
              items={[item_0, item_1, item_2, item_3, item_4, item_5, item_neutral]}
            />
          ),
        )}
      </div>
    </>
  );
}

interface IMatchPlayerProps {
  accountId: number | undefined;
  heroId: number;
  kills: number;
  deaths: number;
  assists: number;
  net_worth: number;
  last_hits: number;
  denies: number;
  gpm: number;
  xpm: number;
  damage: number;
  towerDamage: number;
  items: number[];
}

function MatchPlayer({
  accountId,
  heroId,
  kills,
  deaths,
  assists,
  net_worth,
  last_hits,
  denies,
  gpm,
  xpm,
  damage,
  towerDamage,
  items,
}: IMatchPlayerProps) {
  const hero = findHeroInfo(Number(heroId));
  const { playerShortInfo } = usePlayerShortInfo(Number(accountId));

  if (!hero) return null;

  const children = (
    <>
      <div className={styles.heroAvatar}>
        <img src={`${assetsUrl}${hero.img}`} alt="Hero" />
      </div>
      <div>{accountId && playerShortInfo ? playerShortInfo.profile.personaname : 'Anonymous'}</div>
      <div>
        {kills} / {deaths} / {assists}
      </div>
      <div>{net_worth}</div>
      <div>
        {last_hits} / {denies}
      </div>
      <div>
        {gpm} / {xpm}
      </div>
      <div>
        {damage} / {towerDamage}
      </div>
      <div>
        {items.map((itemId, index) => (
          <PlayerItem key={index} itemId={itemId} />
        ))}
      </div>
    </>
  );

  if (accountId) {
    return (
      <Link to={`/players/${accountId}`} className={styles.player}>
        {children}
      </Link>
    );
  } else {
    return <div className={styles.player}>{children}</div>;
  }
}

function PlayerItem({ itemId }: { itemId: number }) {
  const item = findItemsInfo(itemId.toString());
  if (!item) return null;
  return <img width="50px" src={`${assetsUrl}${item.img}`} alt="item" />;
}

export { Match };
