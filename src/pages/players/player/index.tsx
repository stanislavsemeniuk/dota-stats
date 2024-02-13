import React from 'react';
import { Outlet } from 'react-router-dom';

function Player() {
  return (
    <div>
      <h1>Player</h1>
      <Outlet />
    </div>
  );
}

export { Player };
