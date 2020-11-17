import React  from 'react'

import './search-bar.styles.css'

//handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void

interface Props {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({handleChange}: Props) => {
    return(
        <div className='search-bar-container'>
            <label>Paieška</label>
            <input type="text"  onChange={handleChange} className='search-bar'
            />

        </div>
    )
}

export default SearchBar
