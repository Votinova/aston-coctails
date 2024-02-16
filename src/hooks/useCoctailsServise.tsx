import { useEffect, useState } from "react";
import { IDrink} from "../types/typeContext";

export interface Drinks {
    drinks: IDrink[]
}
export const useCoctailsServise = (url: string) => {
    const [result, setResult] = useState <Drinks>();
   
    useEffect(()=> {
if (url) {
    fetch('https://' + url)
    .then((res) => res.json())
    .then((res) => setResult(res))
    .catch((error) => error)
}}, [url])
    return result
}