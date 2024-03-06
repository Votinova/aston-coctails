
import { auth } from "../firebaseConfig"


export const outUser = () => {
        auth.signOut()
       return ''
}