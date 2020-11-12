import React from 'react'
import {shopItemWithoutId} from '../../../redux/types/types'

const WidgetItem = ({ title, price, imgUrl} : shopItemWithoutId) =>{
    return(
        <div>
            <div 
            className='img' 
            style={{
                backgroundImage: `url(${imgUrl})`
            }}/>
    <h3 className='title'>{title}</h3>
    <p className='price'>{price} $</p>
        </div>
    )
}

export default WidgetItem;