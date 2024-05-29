
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slices/userSlice";
import { useAppDispatch} from "./typescriptHooks/typescript";
import {  setDoc, doc } from "firebase/firestore"; 
import { db } from "../firebaseConfig";


export const  useLogin = () =>  {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const handleSignUp =  (email: string, password: string) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
        },
        ));
        setDoc(doc(db, 'users', email), {
          likes: [],
          history: [],
        });
        navigate('/')
      })
      .catch(console.error)
    }
    return handleSignUp
}

