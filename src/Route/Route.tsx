import React, {lazy} from 'react';
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom'

const Main = lazy(() => import('../pages/main/mainIndex'))
const Search = lazy(() => import('../pages/search/indexSerach'))
const Profile = lazy(() => import('../pages/Profile/indexProfile'));
const Element = lazy(() => import('../pages/element/elementIndex'))
const Like = lazy(() => import('../pages/Profile/like/LikeIndex'))
const History = lazy(() => import('../pages/Profile/history/historyIndex'))
const FormLogIn = lazy(() => import('../components/Auto/formLoginIndex'))
const FormSignUp = lazy(() => import('../components/Auto/formSignIndex'))

export const RootRouter = () => {
  return (
    <Routes>
              <Route path='/' element={<Main />} />
              <Route path={`/search`} element={<Search />} />
              <Route path='/profile' element={<Profile />} />
              <Route path={`/element`} element={<Element />} />
              <Route path='/formlogin' element={<FormLogIn />} />
              <Route path='/formsignup' element={<FormSignUp />} /> 
              <Route path='/history' element={<History />} /> 
              <Route path='/like' element={<Like />} /> 
    </Routes>
  )
}
