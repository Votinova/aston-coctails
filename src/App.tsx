import React from 'react';
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './pages/main/Main';
import { Search } from './pages/search/Search';
import { Profile } from './pages/Profile/Profile';
import { ThemeContextProvider } from './context/context';
import { Element } from './pages/cart/Element';
import { Sign } from './pages/form/Sign';
import { FormLogIn } from './pages/form/Auto/FormLogIn';
import { FormSignUp } from './pages/form/Auto/FormSignUp';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { History } from './pages/Profile/history/History';
import { Like } from './pages/Profile/like/Like';

function App() {
  return (
   <div>
    <Provider store={store}>
        <ThemeContextProvider>
          <Navbar />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/search' element={<Search />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/element' element={<Element />} />
              <Route path='/sign' element={<Sign />} />
              <Route path='/formsignup' element={<FormSignUp />} />
              <Route path='/formlogin' element={<FormLogIn />} />   
              <Route path='/history' element={<History />} /> 
              <Route path='/like' element={<Like />} /> 
            </Routes>
        </ThemeContextProvider>
    </Provider>
   </div>
  );
}

export default App;
