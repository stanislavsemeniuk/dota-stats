import React from 'react';

import { IPlayerHero } from '../../types/player';

function PlayerHero({ hero_id, games, win, last_played }: IPlayerHero) {
  return (
    <div>
      <p>{hero_id}</p>
    </div>
  );
}

export { PlayerHero };
