import React from 'react'
import { useAppSelector } from '../../../hooks/typescriptHooks/typescript'
import { getLocalStorageHistory } from '../../../localStorage/getLocalStorage/getLocalStorageHistory'
import { His } from '../../../components/His'
import { inUser } from '../../../hooks/inUser'
import { Loader } from '../../../utilits/Loader/Loader'

export const History = () => {
  inUser()
  const email = useAppSelector(state => state.user.email)
  const history = getLocalStorageHistory(email);
  return (
    <div>
    {history?  <div>
      {history?.length !== 0?  <div>
      {history?.map((his: string) => {
        return <His data={his} key={his}/>
      })}
    </div>
    :
    <div>No history</div>}
    </div> : <Loader />}
   </div>
  )
}
