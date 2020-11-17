import React  from 'react'

import './search-bar.styles.css'


const SearchBar = ({handleChange}: any) => {

    return(
        <div className='search-bar-container'>
            <label>Paieška</label>
            <input type="text"  onChange={handleChange} className='search-bar'
            />

        </div>
    )
}

export default SearchBar
