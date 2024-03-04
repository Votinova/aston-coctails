
export function loadFromLocalStorage(email: string) {
    try {
      const serializedState = localStorage.getItem(`${email}`);
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);

    } catch (e) {
      console.warn('Unable to load state from localStorage.', e);
      return undefined;
    }
  }