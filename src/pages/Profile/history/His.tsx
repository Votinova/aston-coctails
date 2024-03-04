import React from 'react'
import { Link } from 'react-router-dom';
import { setSearch } from '../../../store/slices/searchSlise';
import { useDispatch } from 'react-redux';

export const His = (props: {data: string}) => {
    const dispatch = useDispatch();
    function searchClick (searchText: string) {
        dispatch(setSearch({
            search: searchText,
        }))
    }
    return (
    <Link to='/search' onClick={() => searchClick(props.data)}>
       <li>
       {props.data}
       </li>
    </Link>  
)
}
