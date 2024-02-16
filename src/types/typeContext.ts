 export interface IThemeContext {
    dark: boolean;
    toggleDark?: () => void
}

export interface IDrink {
    idDrink: number;
    strDrink: string;
    strDrinkThumb: string
}
// interface ServiceInit {
//     status: 'init'
// }
// interface ServiceLoading {
//     status: 'loading'
// }
// interface ServiceLoaded <T> {
//     status: 'loaded';
//     payload: T
// }
// interface ServiceError {
//     status: 'error';
//     error: Error
// }
// export type Service <T> = 
//     | ServiceInit
//     | ServiceLoading
//     | ServiceLoaded <T>
//     | ServiceError;