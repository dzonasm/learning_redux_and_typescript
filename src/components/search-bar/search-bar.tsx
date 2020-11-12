import React, {ChangeEvent, useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {FILTER} from '../../redux/types/types'

import './search-bar.styles.css'


const SearchBar = () => {

    const [searchField, setSearchField] = useState('')
    const dispatch = useDispatch()


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchField(e.target.value)
        console.log(searchField)
        
    }

    useEffect(() =>{
        dispatch({type: FILTER, payload: searchField})
    },[searchField, dispatch])

    return(
        <div className='search-bar-container'>
            <input type="text"  onChange={handleChange} value={searchField} className='search-bar'
            placeholder="ieskoti garaze"
            />

        </div>
    )
}

export default SearchBar
