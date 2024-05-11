import React, { Suspense} from 'react';

import { ThemeContextProvider } from './context/context';
import { inUser } from './hooks/inUser';
import { Header } from './components/Header';
import { RootRouter } from './Route/Route';


function App() {
  inUser()
  return (
   <div>
        <ThemeContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <RootRouter />
          </Suspense>
        </ThemeContextProvider>
   </div>
  );
}

export default App;
