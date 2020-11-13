import React from 'react'
import { useDispatch} from 'react-redux'
import {TOGGLE_CART_WIDGET_VISIBLE} from '../../../redux/types/types'
import {ReactComponent as Logo} from '../../../resources/shopping_cart_logo.svg'

import './widget-button.styles.css'


const WidgetButton = ()=> {

    const dispatch = useDispatch()
    
    const handleClick = ()=> {
        dispatch({type: TOGGLE_CART_WIDGET_VISIBLE})
    }

    return (
        <div className='widget-toggle' onClick = {handleClick}>
            <Logo className='cart-logo'/>
        </div>
    )
}

export default WidgetButton