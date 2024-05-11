import { arrayRemove, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const DeleteHistory = async(email: string, history: string) => {
    await updateDoc(doc(db, 'users', email), {
        history: arrayRemove(history)
    })
}