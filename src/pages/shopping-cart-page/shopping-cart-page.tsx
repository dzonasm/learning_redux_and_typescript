import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/root-reducer/root-reducer'

import ShoppingCart from '../../components/shopping-cart/shopping-cart'

const ShoppingCartPage= () => {

    
    const selectCartItems= (state: RootState) => state.shoppingCart.items
    const cartItems = useSelector(selectCartItems)
    const numberOfItemsInCart: number = cartItems.reduce((accumulatedNumber: number, item) => accumulatedNumber + item.quantity *item.price ,0)

    return(
        <div>
            <h1 className='cart-empty-text'>Bendra suma: {numberOfItemsInCart}$</h1>
            <ShoppingCart/>
        </div>
    )
}

export default ShoppingCartPage;