import React, { useMemo, useState } from 'react';
import { IThemeContext} from '../types/typeContext';

const defaultState = {
    dark: false
}
export const ThemeContext = React.createContext<IThemeContext>(defaultState);
export const ThemeContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [dark, setDark] = useState(false);
    const toggleDark = () => {
        setDark(!dark);
    }
    const value = useMemo(
        () => ({
            dark, toggleDark
        }),
    [dark])
  return (
    <ThemeContext.Provider
        value={value}
    >
        {children}
    </ThemeContext.Provider>
  )
}
