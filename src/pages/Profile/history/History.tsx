import React from 'react'
import { useAppSelector } from '../../../hooks/typescriptHooks/typescript'
import { getLocalStorageHistory } from '../../../localStorage/getLocalStorage/getLocalStorageHistory'
import { inUser } from '../../../hooks/inUser'
import { FixedSizeList as List } from 'react-window'

import { useDispatch } from 'react-redux'
import { setSearch } from '../../../store/slices/searchSlise'
import { Link } from 'react-router-dom'

export const History = () => {
inUser()
const email = useAppSelector(state => state.user.email)
  const dispatch = useDispatch();
  function searchClick (searchText: string) {
      dispatch(setSearch({
          search: searchText,
      }))
  }
  const history = getLocalStorageHistory(email);
  return (
    <div>
      {history?.length !== 0? 
        <List  width={1400}
        height={950}
        itemCount={history.length}
        itemSize={40}
        key={history}>
          {({index}) => (
            <li>
            <Link to={`/search/${history[index]}`} onClick={() => searchClick(history[index])}>
              {history[index]}
            </Link>
            </li>
          )}
        </List>
    :
    <div>No history</div>}
   </div>
  )
}
