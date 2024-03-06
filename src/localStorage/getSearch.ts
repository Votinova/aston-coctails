import { useAppSelector
} from "../hooks/typescriptHooks/typescript";
export const getSearch = () => {
   let search = useAppSelector(state => state.search.search);
if (search === '' ) {
 search = String(localStorage.getItem('search'))
}
return search
}