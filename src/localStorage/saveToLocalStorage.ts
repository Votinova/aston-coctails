
import { IDrink } from "../types/typeContext";

export function saveToLocalStorage(email: string, state:  { likes: IDrink[] | null, history: string[] | null}) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(`${email}`, serializedState);
    } catch (e) {
      console.warn('Unable to save state to localStorage.', e);
    }
  }
