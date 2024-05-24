import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { ThemeContext } from '../../context/context';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/slices/searchSlise';
import { localStorageHistory } from '../../localStorage/workLocalStorage/localStorageHistory';
import { useAppSelector } from '../../hooks/typescriptHooks/typescript';
import '../../scss/FormSearch.scss';
import { AddHistory } from '../../hooks/AddHistory';


// export const FormSearch = () => {
// const [searchText, setSearchText] =  useState('');
// const dispatch = useDispatch();
// const email = useAppSelector(state => state.user.email)

// // function searchClick (searchText: string) {
// //     dispatch(setSearch({
// //         search: searchText,
// //     }))
// //     localStorageHistory(email, searchText)
// // }
//     return (
//     <div className='search-all'>
//         <input title='search' 
        // value={searchText}
        // className={dark? 'search dark' : 'search'} 
        // onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setSearchText(() => e.target.value); 
        // dispatch(setSearch({
        //     search: searchText,
        // })
        // )}}
//         />
//         <Link to={`/search/${searchText}`}>
//                 <button 
//                 title="search"  
//                 className='logo-search'
//                 // onClick={()=> searchClick(searchText)}
//                 >
//                     <MagnifyingGlass size={32} />
//                 </button>
//         </Link>
//     </div>
//   )
// }

export const FormSearch = () => {
const [searchText, setSearchText] =  useState('');
const dispatch = useDispatch();
const email = useAppSelector(state => state.user.email)

function searchSubmit (email: string, searchText: string) {
    dispatch(setSearch({
        search: searchText,
    }))
    localStorageHistory(email, searchText);
    AddHistory(email, searchText)
}

    return (
        <div className='form-search'>
            <form action='' onSubmit={() => searchSubmit(email, searchText)}>
                <input type='text' value={searchText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setSearchText(() => e.target.value); 
        dispatch(setSearch({
            search: searchText,
        })
        )}}/>
                <Link to='/search'>
                    <button type='submit' >Поиск</button>
                </Link>
            </form>
        </div>
    )
}
