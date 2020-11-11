import React, {ChangeEvent, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {itemsListState } from '../../redux/adds/adds.reducer'

import './search-bar.styles.css'


const SearchBar = () => {

    const [searchField, setSearchField] = useState('')
    const dispatch = useDispatch()
    const items = useSelector<itemsListState, itemsListState['items']>((state) => state.items)

    //tikslas filtruoti items masyva pagal title ir subtitile naudojant .filter() metoda
    //po to butu filtravimo metodas pagal kainas

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchField(e.target.value)
        console.log(items)
        let newItems = items.filter(item => item.title.toLowerCase().includes(searchField.toLowerCase()))
        console.log(newItems)
        dispatch({type: "FILTER", payload: newItems })
    }


    return(
        <div className='search-bar-container'>
            <input type="text"  onChange={handleChange} value={searchField} className='search-bar'
            placeholder="ieskoti garaze"
            />

        </div>
    )
}

export default SearchBar
