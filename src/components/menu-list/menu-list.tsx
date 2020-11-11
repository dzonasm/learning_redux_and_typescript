import React from 'react'
import MenuItem from '../menu-item/menu-item'
import { useSelector} from 'react-redux'
import AddToCartButton from '../add-to-cart-button/add-to-cart-button'

export default function MenuList() {

    const state = useSelector((state: {
        items: {
            items: any[];
        };
        shoppingCart: never;
    }) => state.items)
    
    console.log(state.items)
    //sutvarkyti destructuring

    const content = state.items.map(item => (
        <div>
            <MenuItem 
            key={item.id} 
            title={item.title} 
            subtitle={item.subtitle} 
            imgUrl={item.imgUrl} 
            price={item.price}
            /> 
            <AddToCartButton id={item.id}/> 
        </div>
    ))

    return (
        <div className='menu-list-container'>
            <h1> Vo Skelbimai, m8</h1>
    <div>{content}</div>
        </div>
    )
}
