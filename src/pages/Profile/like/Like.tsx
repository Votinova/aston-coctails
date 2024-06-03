import React from 'react'
import { useAppSelector } from '../../../hooks/typescriptHooks/typescript'
import { inUser } from '../../../hooks/inUser';
import { useFetchLikesQuery } from '../../../store/servise/Firebase'
import { CartLike } from '../../../components/CartLike/CartLike'
import ErrorBoundary from '../../../errorBoundary/errorBoundary';
import { Loader } from '../../../utilits/Loader/Loader';

export const Like = () => {
const email = useAppSelector(state => state.user.email)
inUser();
const {data, isError, isLoading} = useFetchLikesQuery(email);
if (isError) return <ErrorBoundary />
if (isLoading) return <Loader />
return (
  <div>
    {data?.map((id: number) => {
      return <CartLike id={id} key={id}/>
    })}
  </div>
)
}
