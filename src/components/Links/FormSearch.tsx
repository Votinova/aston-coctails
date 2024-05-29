import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/slices/searchSlise';
import { useAppSelector } from '../../hooks/typescriptHooks/typescript';
import '../../scss/FormSearch.scss';
import { AddHistory } from '../../hooks/AddHistory';


export const FormSearch = () => {
const [searchText, setSearchText] =  useState('');
const dispatch = useDispatch();
const email = useAppSelector(state => state.user.email)

function searchSubmit (email: string, searchText: string) {
    dispatch(setSearch({
        search: searchText,
    }))
    AddHistory(email, searchText);
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
                    <button type='submit' onClick={() => searchSubmit(email, searchText)}>Поиск</button>
                </Link>
            </form>
        </div>
    )
}
