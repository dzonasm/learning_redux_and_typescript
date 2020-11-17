import React from 'react'
import MenuItem from '../menu-item/menu-item'
import {shopItemArray} from '../../redux/types/types'
import './menu-list.styles.scss'

export default function MenuList({items} : shopItemArray) {

    
    const content = items.map(item => {
        const{id, title, subtitle, imgUrl, price, quantity} = item

        return(
            <MenuItem
            key={id}
            item={item}
            id={id}
            title={title} 
            subtitle={subtitle} 
            imgUrl={imgUrl} 
            price={price}
            quantity={quantity}
            /> 
    )})

    return (
        <div className='menu-list-container'>
        {content}
        </div>
    )
}
