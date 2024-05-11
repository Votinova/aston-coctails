import { AddHistory } from "../../hooks/AddHistory";
import { loadFromLocalStorage } from "../loadFromLocalStorage";
import { saveToLocalStorage } from "../saveToLocalStorage";

export const localStorageHistory = (email: string, search: string) => {
    const datahistory = loadFromLocalStorage(email);
    const history = datahistory?.history?.concat(search);
    const state = {
        ...datahistory,
        history : history
    }
    saveToLocalStorage(email,state);
    AddHistory(email, search)
}