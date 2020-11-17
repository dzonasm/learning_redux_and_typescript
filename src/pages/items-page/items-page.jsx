import React from 'react'

import MenuList from '../../components/menu-list/menu-list'
import SearchBar from '../../components/search-bar/search-bar'

import './items-page.styles.scss'

const ItemsPage = () => (
    <div>
        <h2 className='skelbimai-header'>Skelbimai</h2>
        <SearchBar />
        <MenuList />
    </div>
)

export default ItemsPage