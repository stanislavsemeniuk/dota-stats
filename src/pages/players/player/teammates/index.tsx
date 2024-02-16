import React from 'react';
import { useParams } from 'react-router-dom';

import { usePlayerTeammates } from '../../../../hooks/usePlayer';
import { Teammate } from '../components/teammate';

import styles from '../player.module.css';

function PlayerTeammates() {
  const { playerId } = useParams();
  const { teammates } = usePlayerTeammates(Number(playerId));
  return (
    <div>
      <div className={styles.tableWrapper}>
        <div className={styles.tableHeader}>
          <div></div>
          <div>Name</div>
          <div>Games together</div>
          <div>Wins together</div>
          <div>Win rate</div>
        </div>
        {teammates &&
          teammates.map(({ account_id, avatarfull, personaname, with_games, with_win }, index) => (
            <Teammate
              key={index}
              account_id={account_id}
              avatarfull={avatarfull}
              personaname={personaname}
              with_games={with_games}
              with_win={with_win}
            />
          ))}
      </div>
    </div>
  );
}

export { PlayerTeammates };
