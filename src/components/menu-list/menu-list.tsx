import React from 'react'
import MenuItem from '../menu-item/menu-item'
import { useSelector} from 'react-redux'
import AddToCartButton from '../add-to-cart-button/add-to-cart-button'
import SearchBar from '../search-bar/search-bar'

import './menu-list.styles.css'

export default function MenuList() {

    const state = useSelector((state: {
        items: {
            items: {id: number, 
                title: string, 
                subtitle: string, 
                price:number, 
                imgUrl: string}[];
        };
        shoppingCart: [];
    }) => state.items)
    
    const content = state.items.map(item => (
        <div key={item.id}>
            <MenuItem 
            title={item.title} 
            subtitle={item.subtitle} 
            imgUrl={item.imgUrl} 
            price={item.price}
            /> 
            <div className='add-button-container'>
            <AddToCartButton buttonText='add to cart' item={item}/> 
            </div>
        </div>
    ))

    return (
        <div className='menu-list-container'>
            <h1 className='skelbimai-header'>Skelbimai</h1>
            <div className='search-bar-container'>
            <SearchBar/>
            </div>
    <div>{content}</div>
        </div>
    )
}
