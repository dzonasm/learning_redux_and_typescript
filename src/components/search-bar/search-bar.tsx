import React, {ChangeEvent, useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'

import './search-bar.styles.css'


const SearchBar = () => {

    const [searchField, setSearchField] = useState('')
    const dispatch = useDispatch()

    //tikslas filtruoti items masyva pagal title ir subtitile naudojant .filter() metoda
    //po to butu filtravimo metodas pagal kainas

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchField(e.target.value)
        console.log(searchField)
        
    }

    useEffect(() =>{
        dispatch({type: "FILTER", payload: searchField})
    },[searchField])



    return(
        <div className='search-bar-container'>
            <input type="text"  onChange={handleChange} value={searchField} className='search-bar'
            placeholder="ieskoti garaze"
            />

        </div>
    )
}

export default SearchBar
