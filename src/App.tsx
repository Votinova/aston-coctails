import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './pages/main/Main';
import { Search } from './pages/search/Search';
import { Profile } from './pages/Profile/Profile';
import { ThemeContextProvider } from './context/context';
import { Element } from './pages/cart/Element';
import { ElementProvider } from './context/contextElement';

function App() {
  return (
   <div>
    <ElementProvider>
    <ThemeContextProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/search' element={<Search />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/element' element={<Element />} />
    </Routes>
    </ThemeContextProvider>
    </ElementProvider>
   </div>
  );
}

export default App;
