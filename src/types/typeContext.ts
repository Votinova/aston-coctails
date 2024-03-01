 export interface IThemeContext {
    dark: boolean;
    toggleDark?: () => void
}
export interface IDrink {
    idDrink: number;
    strDrink: string;
    strDrinkThumb: string
}

export interface IElement {
    idDrink: number;
    strDrink: string;
    strDrinkThumb: string;
    strIngredient1: string | null;
    strIngredient2: string | null;
    strIngredient3: string | null;
    strIngredient4: string | null;
    strIngredient5: string | null;
    strIngredient6: string | null;
    strIngredient7: string | null;
    strIngredient8: string | null;
    strIngredient9: string | null;
    strIngredient10: string | null;
    strIngredient11: string | null;
    strIngredient12: string | null;
    strIngredient13: string | null;
    strIngredient14: string | null;
    strIngredient15: string | null;
    strIngredient16: string | null;
    strInstructions: string;
}
export interface myState {
    user: {
        email: string | null
        password: string | null
        id: string| null,
        token: number | null
    }
}
