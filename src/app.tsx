import React from 'react';
import { Outlet } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { fetcher, revalidateProperties } from './helpers/api';

import { Header } from './components';
import ConstantsContextProvider from './context/СonstantsContext';

function App() {
  return (
    <div className="app">
      <SWRConfig 
        value={{
          fetcher,
          ...revalidateProperties
        }}
      >
        <ConstantsContextProvider>
          <Header />
          <div style={{ width: '80%', margin: '32px auto' }}>
            <Outlet />
          </div>
        </ConstantsContextProvider>
      </SWRConfig>
    </div>
  );
}

export default App;
