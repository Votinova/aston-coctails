import { IForm } from "../types/typeContext";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db} from "../firebaseConfig";
import { doc, setDoc } from 'firebase/firestore';

export const useSignin = () => {
    const navigate = useNavigate();

    const handleSignIn = async(data: IForm) => {
      try {
        const user = await signInWithEmailAndPassword(auth, data.email, data.password);
        
        const document = doc(db, 'users', user.user.uid)

        await setDoc(document, {
          email: data.email,
          likes: []
        });
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    };
    return handleSignIn
}
