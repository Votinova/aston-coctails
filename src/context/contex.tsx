import React, { Children, FunctionComponent, ReactNode, createContext, useState } from 'react';
import { IThemeContext} from '../types/typeContext';

const defaultState = {
    dark: false
}
export const ThemeContext = React.createContext<IThemeContext>(defaultState);
export const ThemeContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [dark, setDark] = useState(false);
    const toggleDark = () => {
        setDark(!dark);
        console.log(dark)
    }
  return (
    <ThemeContext.Provider
        value={{
            dark, toggleDark,
        }}
    >
        {children}
    </ThemeContext.Provider>
  )
}
