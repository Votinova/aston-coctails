import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/slices/searchSlise';
import { useAppSelector } from '../../hooks/typescriptHooks/typescript';
import '../../scss/FormSearch.scss';
import { AddHistory } from '../../hooks/AddHistory';
import { useSearch } from '../../hooks/useSearch';

export const FormSearch = () => {
const [searchText, setSearchText] =  useState('');
const dispatch = useDispatch();
const email = useAppSelector(state => state.user.email)
const onSearch = useSearch(searchText);
function searchSubmit (email: string, searchText: string) {
    onSearch()
    if (searchText) {
        AddHistory(email, searchText);
    }
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
                <Link to={`/search/${searchText}`}>
                    <button type='submit' onClick={() => searchSubmit(email, searchText)}>Поиск</button>
                </Link>
            </form>
        </div>
    )
}
