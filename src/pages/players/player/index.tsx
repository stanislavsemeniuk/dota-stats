import React from 'react';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Player() {
  const { playerId } = useParams();

  return (
    <div>
      <h1>Player, accountId: {playerId}</h1>
      <Outlet />
    </div>
  );
}

export { Player };
