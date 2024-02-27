import { create } from 'domain'
import React, { ReactNode, createContext, useState } from 'react'
import { IContextElement } from '../types/typeContext';
const startId = {
    id: 0
}
export const contextElement = createContext<IContextElement>(startId);

export const ElementProvider: React.FC <{children: ReactNode}> = ({children}) => {
        const [id, setId] = useState(0);
        const choiceId = (idElement: number) => {
            setId(idElement);
        }
    return (
        <contextElement.Provider value={{
            id, choiceId
        }}>
            {children}
        </contextElement.Provider>
    )
}