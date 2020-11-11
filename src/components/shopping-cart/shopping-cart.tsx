import React from 'react'
import { useSelector} from 'react-redux'
import ShoppingCartItem from '../shopping-cart-items/shopping-cart-items.componetn'

import {itemsListState} from '../../redux/adds/adds.reducer'

export default function ShoppingCart() {

    const shoppingCartItems = useSelector<itemsListState, itemsListState['items']>((state) => state.items)
    
    //sutvarkyti destructuring

    const content = shoppingCartItems.map(item => (
        <div>
            <ShoppingCartItem
            key={item.id} 
            title={item.title} 
            subtitle={item.subtitle} 
            imgUrl={item.imgUrl} 
            price={item.price}
            /> 
            <button >Add to Cart</button> 
        </div>
    ))

    return (
        <div className='shopping-cart-container'>
            <h1> Tavo vezimelis, seni</h1>
    <div>{content}</div>
        </div>
    )
}
