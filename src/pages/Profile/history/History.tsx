import React from 'react'
import { useAppSelector } from '../../../hooks/typescriptHooks/typescript'
import { inUser } from '../../../hooks/inUser'
import { useFetchHistoryQuery } from '../../../store/servise/Firebase'

export const History = () => {
inUser();
const email = useAppSelector(state => state.user.email);
const {data} = useFetchHistoryQuery(email);
console.log(data)
  return (
    <div>
      {history?.length !== 0? 
        <ul>
          {data?.map((his: string) => {
            return <li key={his + 1}>{his}</li>
          })}
        </ul>
    :
    <div>No history</div>}
   </div>
  )
}
