import React from 'react'
import {shopItem} from '../../../redux/types/types'

import './widget-items-styles.css'

const WidgetItem = ({ title, price, imgUrl} : shopItem) =>{
    return(
        <div className="cart-item">
            <div 
            className='img' 
            style={{
                backgroundImage: `url(${imgUrl})`
            }}/>
    <h3 className='cart-item-title'>{title}</h3>
    <p className='cart-item-price'>{price} $</p>
        </div>
    )
}

export default WidgetItem;