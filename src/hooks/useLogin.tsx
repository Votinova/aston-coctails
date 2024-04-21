
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "./typescriptHooks/typescript";
import { initialState } from "../localStorage/workLocalStorage/initialState";
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 
import { db } from "../firebaseConfig";
import { IDrink } from "../types/typeContext";


// type infoUsers =  {
//   likes: IDrink [] | [],
//   history: string [] | []
// }
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
    const email = useAppSelector(state => state.user.email)
    initialState(email, {likes: [], history: []})
    return handleSignUp
}

