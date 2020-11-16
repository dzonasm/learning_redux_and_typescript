import React from 'react'
import {shopItem} from '../../../redux/types/types'

import './widget-items-styles.css'

const WidgetItem = ({ title, price, imgUrl, quantity} : shopItem) =>{
    return(
        <div className="cart-item">
            <div 
            className='widget-img' 
            style={{
                backgroundImage: `url(${imgUrl})`
            }}/>
    <h3 className='cart-item-title'>{title}</h3>
        <p className='cart-item-price'>{quantity} x {price} $</p>
        </div>
    )
}

export default WidgetItem;