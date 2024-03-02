import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { doc, onSnapshot, updateDoc, arrayRemove, arrayUnion} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { IDrink } from "../types/typeContext";


 export const LikeElement = (coctailId: number | null) => {
    const user = useSelector((state: RootState) => state.user.user);
    const [islikeElement, setisLikeElement] = useState(false);
  
    useEffect(() => {
      if (!user || !coctailId) {
        return;
      }
      const document = doc(db, 'users', user.uid)

      onSnapshot(document, doc => {
        const data = doc.data();
        if (data && data.likes) {
          setisLikeElement(data.likes.some((item: IDrink) => item.idDrink === coctailId));
        }
      });
      
    }, [user, coctailId]);

    const likeCoctail = async (coctail: IDrink) => { 
      const user = useSelector((state: RootState) => state.user.user); 
      if (!user) {
          return
      }
      const document = doc(db, 'users', user.uid)
      try {
      await updateDoc(document, {
        likes: islikeElement ? arrayRemove ({
          id: coctail?.idDrink,
          title: coctail?.strDrink,
          img: coctail?.strDrinkThumb
      }) :
        arrayUnion({
             id: coctail?.idDrink,
             title: coctail?.strDrink,
             img: coctail?.strDrinkThumb
            }),
          
      });
      setisLikeElement(!islikeElement);
    } catch (err) { 
      console.log(err);
    }
  }
  return {islikeElement, likeCoctail}
}
