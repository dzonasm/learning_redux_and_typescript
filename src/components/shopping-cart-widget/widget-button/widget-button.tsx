import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../../redux/root-reducer/root-reducer'
import {TOGGLE_CART_WIDGET_VISIBLE} from '../../../redux/types/types'
import {ReactComponent as Logo} from '../../../resources/shopping_cart_logo.svg'

import './widget-button.styles.css'


const WidgetButton = ()=> {

    const dispatch = useDispatch()
    const handleClick = ()=> {
        dispatch({type: TOGGLE_CART_WIDGET_VISIBLE})
    }
    
    const selectCartItems= (state: RootState) => state.shoppingCart.items
    const cartItems = useSelector(selectCartItems)
    const numberOfItemsInCart: number = cartItems.reduce((accumulatedNumber: number, item) => accumulatedNumber + item.quantity ,0)

    return (
        <div className='widget-toggle' onClick = {handleClick}>
            <Logo className='cart-logo'/>
            <span className='item-count'>{numberOfItemsInCart}</span>
        </div>
    )
}

export default WidgetButton