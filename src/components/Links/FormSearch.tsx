import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { ThemeContext } from '../../context/context';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/slices/searchSlise';


export const FormSearch = () => {
const {dark} = useContext(ThemeContext); 
const [searchText, setSearchText] =  useState('');
const dispatch = useDispatch();

function searchClick (searchText: string) {
    dispatch(setSearch({
        search: searchText,
    }))
}
    return (
    <div className='search-all'>
        <input title='search' 
        className={dark? 'search dark' : 'search'} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setSearchText(e.target.value)}
        onSubmit={() => searchClick(searchText)}
        />
        <Link to='/search'>
                <button 
                title="search"  
                className='logo-search'
                onClick={()=> searchClick(searchText)}
                >
                    <MagnifyingGlass size={32} />
                </button>
        </Link>
    </div>
  )
}
