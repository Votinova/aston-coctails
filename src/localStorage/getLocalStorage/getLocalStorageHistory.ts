import { loadFromLocalStorage } from "../loadFromLocalStorage"

export const getLocalStorageHistory = (email: string) => {
    const data = loadFromLocalStorage(email)
    return data?.history
}