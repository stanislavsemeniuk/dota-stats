import React from 'react';
import { useParams } from 'react-router-dom';

import { usePlayerRecentMatches } from '../../../../hooks/usePlayer';
import PlayerMatch from '../components/match';

import styles from '../player.module.css';

function PlayerOverview() {
  const { playerId } = useParams();
  const { recentMatches } = usePlayerRecentMatches(Number(playerId));
  return (
    <div>
      <h4 className={styles.sectionTitle}>Recent Matches</h4>
      <div className={styles.tableWrapper}>
        <div className={styles.tableHeader}>
          <div>Result</div>
          <div>Hero</div>
          <div>KDA</div>
          <div>Game mode</div>
          <div>Duration</div>
        </div>
        {recentMatches &&
          recentMatches.map(
            (
              {
                match_id,
                hero_id,
                kills,
                deaths,
                assists,
                radiant_win,
                game_mode,
                duration,
                player_slot,
              },
              index,
            ) => (
              <PlayerMatch
                key={index}
                match_id={match_id}
                hero_id={hero_id}
                kills={kills}
                assists={assists}
                deaths={deaths}
                game_mode={game_mode}
                radiant_win={radiant_win}
                duration={duration}
                player_slot={player_slot}
              />
            ),
          )}
      </div>
    </div>
  );
}

export { PlayerOverview };
