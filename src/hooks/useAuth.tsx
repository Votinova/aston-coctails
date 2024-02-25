import { useSelector } from "react-redux";
import { myState } from "../types/typeContext";

export function useAuth () {
    const {email, password, id, token} = useSelector((state: myState) => state.user);
    return {
        isAuth: !email,
        email,
        password,
        id,
        token
    }
}