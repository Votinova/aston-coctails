import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { setUser } from '../store/slices/userSlice';
import { useAppDispatch } from './typescriptHooks/typescript';


export const useSignin = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const handleSignIn = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(setUser({
        email: user.email,
        id: user.uid,
      }));
      navigate('/')
    })
    .catch(console.error)
  }

  return handleSignIn
}
  