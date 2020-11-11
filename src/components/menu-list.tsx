import React from 'react'
import MenuItem from './menu-item/menu-item'
import {useDispatch, useSelector} from 'react-redux'

import {itemsListState} from '../redux/adds/adds.reducer'

export default function MenuList() {

    const items = useSelector<itemsListState, itemsListState['items']>((state) => state.items)
    
    //sutvarkyti destructuring

    const content = items.map(item => (
    <MenuItem 
    key={item.id} 
    title={item.title} 
    subtitle={item.subtitle} 
    imgUrl={item.imgUrl} 
    price={item.price}  
    />))

    return (
        <div>
            <h1> Vo Skelbimai, m8</h1>
    <div>{content}</div>
        </div>
    )
}
