import React from 'react'
import MenuItem from '../menu-item/menu-item'
import { useSelector} from 'react-redux'
import AddToCartButton from '../add-to-cart-button/add-to-cart-button'
import {RootState} from '../../redux/root-reducer/root-reducer'

import './menu-list.styles.scss'

export default function MenuList() {

    const selectItems = (state: RootState) =>state.items
    const items = useSelector(selectItems)
    
    const content = items.items.map(item => (
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
