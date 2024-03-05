import { IDrink } from "../../types/typeContext";
import { loadFromLocalStorage } from "../loadFromLocalStorage";
import { saveToLocalStorage } from "../saveToLocalStorage";

export const localStorageDislike = (email: string, id: number) => {
    const dataLikes = loadFromLocalStorage(email);
    const likes = dataLikes.likes.filter((like: IDrink) => like?.idDrink !== id)
    const state = {
        ...dataLikes,
        likes : likes
    }
    saveToLocalStorage(email,state)
}