import { IDrink } from "../../types/typeContext";
import { loadFromLocalStorage } from "../loadFromLocalStorage";
import { saveToLocalStorage } from "../saveToLocalStorage";
import { useDisLikes } from "../../hooks/useLikes";

export const localStorageDislike = (email: string, coctail: IDrink) => {
    const dataLikes = loadFromLocalStorage(email);
    const likes = dataLikes.likes.filter((like: IDrink) => like?.idDrink !== coctail.idDrink)
    const state = {
        ...dataLikes,
        likes : likes
    }
    saveToLocalStorage(email,state);
    useDisLikes(email, coctail.idDrink)
}