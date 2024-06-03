import React from 'react';
import { useFormik } from 'formik';
import { useLogin } from '../../../hooks/useLogin';
import { Link } from 'react-router-dom';
import '../../../scss/Auth.scss'


export const FormLogIn = () => {
  const handleSignUp = useLogin();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
     handleSignUp(values.email, values.password);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='form-sign-up'>
      <p>У вас нет аккаунта?Создайте его прямо сейчас</p>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder='Email'
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
      <button type="submit">Зарегистрироваться</button>
    </form>
    <div className='under-form'>
      <p>У меня уже есть аккаунт.</p>
      <button className='link'><Link to='/formsignup'>Войти</Link></button>
    </div>
    </div>

  );
}
