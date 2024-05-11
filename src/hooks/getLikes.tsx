import { getDoc, doc} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { IDrink } from "../types/typeContext";

export const getLikes = async(email: string) => {
    if (email) {
        const docSnap = await getDoc(doc(db, 'users/', email,));
        try {
          return docSnap.data()?.likes
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const getLikesQuery = async (email: string) => {
    const arrIdCoctails = await getLikes(email)
    const likes: IDrink [] = [];
    arrIdCoctails?.forEach((id: number) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(res => likes.push(res?.drinks[0]))
    })
    console.log(likes)
    return likes;
}
