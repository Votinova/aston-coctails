import { useSelector } from "react-redux";
import { myState } from "../types/typeContext";

export function useAuth () {
    const {email} = useSelector((state: myState) => state.user);
    return email
}