import { useEffect, useState } from "react";
import { IElement } from "../types/typeContext";
import { Element } from "../pages/cart/Element";



export interface Element {
    drinks: IElement []
}
export const useElement = (url: string) => {
    const [result, setResult] = useState <Element> ();

    useEffect (() => {
        if (url) {
            fetch('https://' + url)
            .then(res => res.json())
            .then(res => setResult(res))
            .catch(error => error)
        }}, [url])
    return result;
}