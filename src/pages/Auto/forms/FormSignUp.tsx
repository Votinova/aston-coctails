import React from 'react';
import { useFormik } from 'formik';
import { useSignin } from '../../../hooks/useSignin';
import { Link } from 'react-router-dom';
import '../../../scss/Auth.scss'

export const FormSignUp = () => {

  const handleSignIn = useSignin();
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
    <div>
    <form onSubmit={formik.handleSubmit} className='form-sign-up'>
      <p>У вас уже есть аккаунт? Войдите</p>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder='email'
      />
      <label htmlFor="password">Пароль</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
         placeholder='пароль'
       />
      <button type="submit">Войти</button>
    </form>
    <div className='under-form'>
    <p>У меня еще нет аккаунта.</p>
    <button className='link'><Link to='/formsignup'>Зарегистрироваться</Link></button>
      </div>
      </div>
  );
}