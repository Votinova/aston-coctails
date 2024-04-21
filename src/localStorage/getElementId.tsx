import { useAppSelector
 } from "../hooks/typescriptHooks/typescript";
 
export const getElementId = () => {
    let id = useAppSelector(state => state.element.id);
if (id === 0 ) {
  id = Number(localStorage.getItem('id'))
}
return id
}