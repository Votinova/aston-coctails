import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../store/slices/userSlice';




export const FormSignUp = () => {
  const dispatch = useDispatch();
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
  

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      handleSignIn(values.email, values.password);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='form-sign-up'>
      <h1>You have accoun? Go</h1>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder='email'
      />
      <label htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
         placeholder='password'
       />

      <button type="submit">Sign in</button>
    </form>
  );
}