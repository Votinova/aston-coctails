import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { setUser } from "../store/slices/userSlice";
import { onSnapshot, doc } from "firebase/firestore";
import { RootState } from "../store/store";

export function useAuth () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSignin = useSelector((state: RootState) => state.user.user);
    
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user  => {
            if(!user) {
                dispatch(setUser(null));
                return;
            }
            const document = doc(db, 'users', user.uid);

            onSnapshot(document, () => {
                dispatch(
                    setUser({
                        email: user.email,
                        uid: user.uid
                    })
                )
            })
            navigate('/');
        })
        return () => unsub()
    }, [dispatch])
    return isSignin
}