import React, {ChangeEvent} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {itemsListState } from '../../redux/adds/adds.reducer'


const SearchBar = () => {
    const dispatch = useDispatch()
    const items = useSelector<itemsListState, itemsListState['items']>((state) => state.items)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const textFieldValue = e.target.value
            let filteredArray
            if (textFieldValue){
                    filteredArray = items.filter(
                    item=>
                    item.title.toLowerCase()
                    .includes(textFieldValue.toLowerCase()))
                    dispatch({type: "FILTER_BY_NAME", payload: filteredArray})
                    console.log(items)
                } else return
    }


    return(
        <div className='search-bar-container'>
            <input type="text"  onChange={handleChange}/>

        </div>
    )
}

export default SearchBar
