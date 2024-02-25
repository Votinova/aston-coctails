// import React from 'react';
// import { useFormik } from 'formik';
// import { UseDispatch, useDispatch } from 'react-redux';
// import { setUser } from '../../../store/slices/userSlice';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { error } from 'console';


// export const FormLogIn = () => {
//   const dispatch = useDispatch();

//   const handleSignUp = (email: string, password: string) => {
//     const auth = getAuth();
//     console.log(auth);
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(data => console.log(data))
//       .catch(error => console.log(error))
//   } 

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     onSubmit: values => {
//       handleSignUp(values.email, values.password);
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit} className='form-sign-up'>
//       <h1> You have not account? Create new </h1>
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//         placeholder='Email'
//       />
//       <label htmlFor="password">Password</label>
//        <input
//          id="password"
//          name="password"
//          type="password"
//          onChange={formik.handleChange}
//          value={formik.values.password}
//          placeholder='password'
//        />

//       <button type="submit">Sign up</button>
//     </form>
//   );
// }
