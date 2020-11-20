import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import MenuList from '../../components/menu-list/menu-list'
import SearchBar from '../../components/search-bar/search-bar'
import { RootState } from '../../redux/root-reducer/root-reducer'
import {shopItem} from '../../redux/types/types'
import {SortingSelector
} from '../../components/sorting-selector/sorting-selector'

import './items-page.styles.scss'

const ItemsPage = () => {

    const [searchField, setSearchField] = useState('')
    const selectItems = (state: RootState) => state.items.items
    const items = useSelector(selectItems)
    const selectSorting = (state: RootState) => state.sort.sort
    const sort = useSelector(selectSorting)

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(e.target.value)
    }

    let filteredItems:shopItem[] = items.filter(item => (
        item.title.toLowerCase().includes(searchField.toLowerCase()) || 
        item.subtitle.toLowerCase().includes(searchField.toLowerCase())))

    if (sort==='asc'){
        filteredItems.sort((a,b) => a.price - b.price)
    }
    if(sort==="dsc"){
        filteredItems.sort((a,b) => b.price-a.price )
    }
    if(sort==="no-sort"){
        filteredItems.sort()
    }

    return (
        <div>
            <h2 className='skelbimai-header'>Skelbimai</h2>
            <div className='search-container'>
            <SearchBar handleChange={handleChange} />
            <SortingSelector/>

            </div>
            <MenuList items={filteredItems} />

        </div>
    )
}

export default ItemsPage