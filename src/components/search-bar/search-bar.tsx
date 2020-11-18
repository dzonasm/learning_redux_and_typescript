import React  from 'react'
import {searchBarProps} from '../../redux/types/types'
import './search-bar.styles.css'


const SearchBar = ({handleChange}: searchBarProps) => {
    return(
        <div className='search-bar-container'>
            <label>Paieška</label>
            <input type="text"  onChange={handleChange} className='search-bar'
            />

        </div>
    )
}

export default SearchBar
