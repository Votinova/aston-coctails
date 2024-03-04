import { IDrink } from "../../types/typeContext";
import { saveToLocalStorage } from "../saveToLocalStorage";
export const initialState = (email: string, initialSt: {likes: IDrink[], history: string[]}) => {
    saveToLocalStorage(email, initialSt);
    
}