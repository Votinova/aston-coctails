import { RootState } from "../store/store";
import { useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { IDrink } from "../types/typeContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";


export const uselikesCoctails = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const [likesCoctails, setLikesCoctails] = useState<IDrink[]>([]);
    useEffect(() => {
      if (!user) {
        return;
      }
   const document = doc(db, 'users', user?.uid)
      const unsubDoc = onSnapshot(document, doc => 
        {
          setLikesCoctails(doc.data()?.likes);
        }
      );
      return () => unsubDoc();
    }, [user]);
    return likesCoctails;
  };