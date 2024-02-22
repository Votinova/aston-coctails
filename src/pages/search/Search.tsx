import React,{ useState } from 'react'
import'./Search.scss';
import { useCoctailsServise } from '../../hooks/useCoctailsServise';
import { Coctail } from '../main/Coctail';
import { IDrink } from '../../types/typeContext';
export const Search = () => {
  const [searchTitle, setSearchTitle] = useState(true);
  const [searchIngridients, setSearchIngridient] = useState(false);
  const [text, setText] = useState('');
  function searchIngridientsStart ()  {
    setSearchTitle(false);
    setSearchIngridient(true);

}
  function searchTitleStart ()  {
  setSearchTitle(true);
  setSearchIngridient(false);

}
  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  return (
  <div className='search-menu'>
    <button title='search-title' onClick={searchTitleStart} 
    className={searchTitle? 'active' :''}>
      Search by name
    </button>
    <button title='search-ingridients' onClick={searchIngridientsStart}
    className={searchIngridients? 'active' : ''}>
      Search by ingredient
    </button>
    <input title='search' placeholder={searchTitle? 'margarita' : 'vodka'}
    onChange={handleChange}
    >
    </input>
    <button title='search-start' className='button-start'>
      Search
    </button>
  </div>
  )
}
