import React, { Suspense, lazy } from 'react';
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { Navbar } from './components/Navbar';
import { ThemeContextProvider } from './context/context';
import { getElementId } from './localStorage/getElementId';
import { getSearch } from './localStorage/getSearch';


const Main = lazy(() => import('./pages/main/mainIndex'))
const Search = lazy(() => import('./pages/search/indexSerach'))
const Profile = lazy(() => import('./pages/Profile/indexProfile'));
const Element = lazy(() => import('./pages/cart/elementIndex'))
const Sign = lazy(() => import('./pages/form/signIndex'))
const Like = lazy(() => import('./pages/Profile/like/LikeIndex'))
const History = lazy(() => import('./pages/Profile/history/historyIndex'))
const FormLogIn = lazy(() => import('./components/Auto/formLoginIndex'))
const FormSignUp = lazy(() => import('./components/Auto/formSignIndex'))



function App() {
 const id = getElementId()
 const search = getSearch()
  return (
   <div>
        <ThemeContextProvider>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path='/' element={<Main />} />
              <Route path={`/search/${search}`} element={<Search />} />
              <Route path='/profile' element={<Profile />} />
              <Route path={`/element/${id}`} element={<Element />} />
              <Route path='/sign' element={<Sign />} />
              <Route path='/formsignup' element={<FormSignUp />} />
              <Route path='/formlogin' element={<FormLogIn />} />   
              <Route path='/history' element={<History />} /> 
              <Route path='/like' element={<Like />} /> 
            </Routes>
          </Suspense>
        </ThemeContextProvider>
   </div>
  );
}

export default App;
