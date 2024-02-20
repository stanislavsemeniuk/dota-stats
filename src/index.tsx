import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './app';
import {
  Players,
  Heroes,
  Player,
  PlayerOverview,
  PlayerTeammates,
  PlayerHeroes,
  Hero,
  ErrorPage,
  Match,
} from './pages';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'players',
        element: <Players />,
      },
      {
        path: 'players/:playerId',
        element: <Player />,
        children: [
          {
            path: '',
            element: <PlayerOverview />,
          },
          {
            path: 'heroes',
            element: <PlayerHeroes />,
          },
          {
            path: 'teammates',
            element: <PlayerTeammates />,
          },
        ],
      },
      {
        path: 'heroes',
        element: <Heroes />,
      },
      {
        path: 'heroes/:heroId',
        element: <Hero />,
      },
      {
        path: 'matches/:matchId',
        element: <Match />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
