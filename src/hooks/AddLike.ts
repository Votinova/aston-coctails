import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig';


export const AddLike = async (email: string, id: number) => {
  await updateDoc (doc(db, 'users', email), {
    likes: arrayUnion(id)
  })
console.log(1)
}

