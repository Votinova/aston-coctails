import React, { Suspense} from 'react';
import { inUser } from './hooks/inUser';
import { RootRouter } from './Route/Route';
import { Navbar } from './components/Navbar/Navbar';


function App() {
  inUser()
  return (
   <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <RootRouter />
          </Suspense>
   </div>
  );
}

export default App;
