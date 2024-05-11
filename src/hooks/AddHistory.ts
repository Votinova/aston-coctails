import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";


export const AddHistory = async (email: string, history: string) => {
    await updateDoc(doc(db, 'users', email), {
        history: arrayUnion(history)
    })
}