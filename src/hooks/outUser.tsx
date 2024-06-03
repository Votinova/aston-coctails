
import { useNavigate } from "react-router-dom"
import { auth } from "../firebaseConfig"
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";

export const outUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    function out() {
        auth.signOut();
        dispatch(setUser({
            email: '',
            id: ''
        }))
        navigate('/')
    }
    return out
}