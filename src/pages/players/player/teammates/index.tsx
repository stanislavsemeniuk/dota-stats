import React from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import { usePlayerTeammates } from '../../../../hooks/usePlayer';
import { Teammate } from '../components/teammate';

import styles from '../player.module.css';

function PlayerTeammates() {
  const { playerId } = useParams();
  const { teammates } = usePlayerTeammates(Number(playerId));
  const [searchParams, setSearchParams] = useSearchParams();

  if (!teammates) {
    return null;
  }

  function handleSort(sortValue: string) {
    if (searchParams.get('sort') === sortValue) setSearchParams({});
    else setSearchParams({ sort: sortValue });
  }

  return (
    <div>
      <div className={styles.tableWrapper}>
        <div className={styles.tableHeader}>
          <div></div>
          <div>Name</div>
          <div className={styles.sortButton} onClick={() => handleSort('games')}>
            Games
          </div>
          <div className={styles.sortButton} onClick={() => handleSort('wins')}>
            Wins
          </div>
          <div className={styles.sortButton} onClick={() => handleSort('winRate')}>
            Winrate
          </div>
        </div>
        {teammates.map(({ account_id, avatarfull, personaname, with_games, with_win }, index) => (
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
