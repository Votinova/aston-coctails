import { arrayRemove, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig';

export const DeleteLike = async (email: string, id: number) => {
    await updateDoc (doc(db, 'users', email), {
      likes: arrayRemove(id)
    })
    console.log(1)
  }