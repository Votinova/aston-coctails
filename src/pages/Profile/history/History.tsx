import React from 'react'
import { useAppSelector } from '../../../hooks/typescriptHooks/typescript'
import { getLocalStorageHistory } from '../../../localStorage/getLocalStorage/getLocalStorageHistory'
import { His } from './His'

export const History = () => {
  const email = useAppSelector(state => state.user.email)
  const history = getLocalStorageHistory(email);
  return (
    <div>
    {history?.length !== 0?  <div>
    {history.map((his: string) => {
      return <His data={his} key={his}/>
    })}
  </div>
  :
  <div>No history</div>}
  </div>
  )
}
