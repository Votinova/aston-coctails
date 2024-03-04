import { loadFromLocalStorage } from "../loadFromLocalStorage"

export const getLocalStorageLike = (email: string) => {
    const data = loadFromLocalStorage(email)
    return data?.likes
}