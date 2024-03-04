
import { IDrink } from "../../types/typeContext";
import { getLocalStorageLike } from "../getLocalStorage/getLocalStorageLike"

export const isLikeElement = (email: string, id: number) => {
    const likes = getLocalStorageLike(email);
    
    for (const like of likes) {
        if (like?.iDrink === id ) 
        return true
    }
   return false
}