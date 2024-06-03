import { useDispatch } from "react-redux"
import { setElement } from "../store/slices/elementSlice";

export const useClickElement = (id: number) => {
    const dispatch = useDispatch();
    function onClickElement () {
        dispatch(setElement({
            id: id
        }))
    }
    return onClickElement
}