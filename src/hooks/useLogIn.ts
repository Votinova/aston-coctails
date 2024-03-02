import { IForm } from "../types/typeContext";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db} from "../firebaseConfig";
import { doc, setDoc } from 'firebase/firestore';




export const useLogin = () => {
    const navigate = useNavigate();

    const handleLogIn = async(data: IForm) => {
      try {
        const user = await createUserWithEmailAndPassword(auth, data.email, data.password);

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
    return handleLogIn
}
