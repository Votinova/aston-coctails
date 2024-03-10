import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAppDispatch} from "./typescriptHooks/typescript";
import { setUser } from "../store/slices/userSlice";

export  function inUser () {
const dispatch =  useAppDispatch()
    const auth = getAuth();
     onAuthStateChanged(auth, (user) => {
      if (user) {
         dispatch(setUser({
          email: user?.email,
          id: user?.uid,
        }))
}})
  return 
}


