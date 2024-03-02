import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { IDrink } from "../types/typeContext";

export const useUpdateDoc = () => {
    const user = useSelector((state: RootState) => state.user.user);

    const update = async (coctails: IDrink [], likeDrink: number []) => {

        if (!user) {
            return
        }
        const likeCoctail = coctails.filter(coctail => !likeDrink.includes(+coctail.idDrink));
        const document = doc(db, 'users', user.uid);
        try {
            await updateDoc(document, {
              likes: likeCoctail,
            });
          } catch (err) {
            console.error(err);
          }

    }
    return update
}