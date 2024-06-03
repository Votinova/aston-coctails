import { useDispatch } from "react-redux"
import { setSearch } from "../store/slices/searchSlise";

export const useSearch = (search: string) => {
    const dispatch = useDispatch();
    function onSearch () {
        dispatch(setSearch({
            search: search,
        }))
    }
    return onSearch
}