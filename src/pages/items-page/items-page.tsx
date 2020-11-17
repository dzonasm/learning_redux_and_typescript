import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import MenuList from '../../components/menu-list/menu-list'
import SearchBar from '../../components/search-bar/search-bar'
import { RootState } from '../../redux/root-reducer/root-reducer'
import {shopItem} from '../../redux/types/types'

import './items-page.styles.scss'

const ItemsPage = () => {

    const [searchField, setSearchField] = useState('')
    const selectItems = (state: RootState) => state.items
    const items = useSelector(selectItems)

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(e.target.value)
    }

    const filteredItems:shopItem[] = items.items.filter(item => (
        item.title.toLowerCase().includes(searchField.toLowerCase()) || 
        item.subtitle.toLowerCase().includes(searchField.toLowerCase())))

    return (
        <div>
            <h2 className='skelbimai-header'>Skelbimai</h2>
            <SearchBar handleChange={handleChange} />
            <MenuList items={filteredItems} />
        </div>
    )
}

export default ItemsPage