import { IDrink } from "../../types/typeContext";
import { getLocalStorageLike } from "../getLocalStorage/getLocalStorageLike";
import { saveToLocalStorage } from "../saveToLocalStorage";

export const localStorageDislike = (email: string, id: number) => {
    const dataLikes = getLocalStorageLike(email)
    const likes = dataLikes.filter((like: IDrink) => like.idDrink !== id)
    const state = {
        ...dataLikes,
        likes : likes
    }
    saveToLocalStorage(email,state)
}