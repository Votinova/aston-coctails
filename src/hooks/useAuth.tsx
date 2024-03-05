import { useAppDispatch, useAppSelector } from "./typescriptHooks/typescript";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "../store/slices/userSlice";


export function useAuth () {

    const email = useAppSelector(state => state.user.email)
    return email
}