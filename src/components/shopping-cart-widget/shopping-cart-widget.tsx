import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/root-reducer/root-reducer'
import RemoveFromCartButton from '../remove-from-cart-button/remove-from-cart-button'
import WidgetItem from './widget-items/widget-items'

import './shopping-cart-widget.styles.css'

function ShoppingCart() {

    const selectCartState = (state : RootState) => state.shoppingCart.items
    const cartState = useSelector(selectCartState)
    console.log(cartState)    
    
    return(
        <div className='shopping-cart-widget'>
            {
                cartState.length > 0? cartState.map((item) =>{
                    return(
                        <div key={item.id}>
                            <WidgetItem
                                title={item.title} 
                                subtitle={item.subtitle} 
                                imgUrl={item.imgUrl} 
                                price={item.price}
                            />
                            <RemoveFromCartButton buttonText='remove from cart' item={item}/> 
                        </div>
                    )}) : <p>no items</p>
            }
        </div>
        )
    }

    export default  ShoppingCart;
