import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/root-reducer/root-reducer'
import RemoveFromCartButton from '../remove-from-cart-button/remove-from-cart-button'
import WidgetItem from './widget-items/widget-items'

import './shopping-cart-widget.styles.css'

function CartWidget() {

    const selectCartState = (state : RootState) => state.shoppingCart.items
    const cartState = useSelector(selectCartState)    

    return(
        <div className='shopping-cart-widget'>
            <div className="cart-items">
            {
                cartState.length > 0? cartState.map((item) =>{
                    return(
                        <div key={item.id} className='cart-item-and-button'>
                            <WidgetItem
                                title={item.title} 
                                subtitle={item.subtitle} 
                                imgUrl={item.imgUrl} 
                                price={item.price}
                            />
                            <RemoveFromCartButton buttonText='remove item' item={item}/> 
                        </div>
                    )}) : <h3 className='cart-empty-text'>Cart is empty</h3>
            }
            </div>
        </div>
        )
    }

    export default  CartWidget;
