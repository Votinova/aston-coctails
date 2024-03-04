
import { IDrink } from "../../types/typeContext";
import { loadFromLocalStorage } from "../loadFromLocalStorage";
import { saveToLocalStorage } from "../saveToLocalStorage";

export const localStorageLike = (email: string, data: IDrink) => {
    const dataLikes = loadFromLocalStorage(email);
    const likes = dataLikes?.likes?.concat(data)

    const state = {
        ...dataLikes,
        likes : likes
    }
    saveToLocalStorage(email, state);
}