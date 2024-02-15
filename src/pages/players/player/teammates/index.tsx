import React from 'react';
import { useParams } from 'react-router-dom';

import { usePlayerTeammates } from '../../../../hooks/usePlayer';
import { Teammate } from '../../../../components';

import styles from './teammates.module.css';

function PlayerTeammates() {
  const { playerId } = useParams();
  const { teammates } = usePlayerTeammates(Number(playerId));
  return (
    <div>
      <h4 className={styles.sectionTitle}>Teammates</h4>
      <div className={styles.teammatesWrapper}>
        <div className={styles.tableHeader}>
          <div></div>
          <div>Name</div>
          <div>Games together</div>
          <div>Wins together</div>
          <div>Win rate</div>
        </div>
        {teammates &&
          teammates.map(({ account_id, avatar, personaname, with_games, with_win }, index) => (
            <Teammate
              key={index}
              account_id={account_id}
              avatar={avatar}
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
