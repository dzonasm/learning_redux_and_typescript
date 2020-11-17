import React from 'react'
import MenuItem from '../menu-item/menu-item'
import AddToCartButton from '../add-to-cart-button/add-to-cart-button'
import {shopItemArray} from '../../redux/types/types'
import './menu-list.styles.scss'

export default function MenuList({items} : shopItemArray) {

    
    const content = items.map(item => (
        <div className='item-container' key={item.id}>
            <MenuItem 
            id={item.id}
            title={item.title} 
            subtitle={item.subtitle} 
            imgUrl={item.imgUrl} 
            price={item.price}
            quantity={item.quantity}
            /> 
            <div className='add-button-container'>
            <AddToCartButton buttonText='add to cart' item={item}/> 
            </div>
        </div>
    ))

    return (
        <div className='menu-list-container'>
        {content}
        </div>
    )
}
