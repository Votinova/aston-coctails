import { IDrink } from "../../types/typeContext";
import { loadFromLocalStorage } from "../loadFromLocalStorage";
import { saveToLocalStorage } from "../saveToLocalStorage";
import { DeleteLike } from  '../../hooks/DeleteLike'

export const localStorageDislike = (email: string, coctail: IDrink) => {
    const dataLikes = loadFromLocalStorage(email);
    const likes = dataLikes.likes.filter((like: IDrink) => like?.idDrink !== coctail.idDrink)
    const state = {
        ...dataLikes,
        likes : likes
    }
    saveToLocalStorage(email,state);
    DeleteLike(email, coctail.idDrink)
}