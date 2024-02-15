import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components';

function App() {
  return (
    <div className="app">
      <Header />
      <div style={{ width: '80%', margin: '32px auto' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
