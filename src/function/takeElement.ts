import { useDispatch } from 'react-redux'
import { setElement } from '../store/slices/elementSlice'

const dispatch = useDispatch();
export function clickElement (id: number) {
  dispatch(setElement({
    id: id
  }))
 }
 