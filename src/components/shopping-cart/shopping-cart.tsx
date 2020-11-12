import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/root-reducer/root-reducer'
import {emptyCart, itemsListState} from '../../redux/shopping-cart/shopping-cart.reducer'

export default function ShoppingCart() {

    const cartState: any= useSelector<RootState>(state => state.shoppingCart?.cart)
    console.log(cartState)

    const cart : emptyCart | itemsListState =cartState

    


return(
    <div>
<h2>The Cart</h2>

    </div>
)
}
