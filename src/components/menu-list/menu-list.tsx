import React from 'react'
import MenuItem from '../menu-item/menu-item'
import { useSelector} from 'react-redux'
import AddToCartButton from '../add-to-cart-button/add-to-cart-button'
import SearchBar from '../search-bar/search-bar'

export default function MenuList() {

    const state = useSelector((state: {
        items: {
            items: {id: number, 
                title: string, 
                subtitle: string, 
                price:number, 
                imgUrl: string}[];
        };
        shoppingCart: [];
    }) => state.items)
    
    const content = state.items.map(item => (
        <div key={item.id}>
            <MenuItem 
            title={item.title} 
            subtitle={item.subtitle} 
            imgUrl={item.imgUrl} 
            price={item.price}
            /> 
            <AddToCartButton buttonText='add to cart' item={item}/> 
        </div>
    ))

    return (
        <div className='menu-list-container'>
            <h1> Vo Skelbimai, m8</h1>
            <SearchBar/>
    <div>{content}</div>
        </div>
    )
}
