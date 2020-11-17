import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/root-reducer/root-reducer'
import MenuItem from '../menu-item/menu-item'
import RemoveFromCartButton from '../remove-from-cart-button/remove-from-cart-button'
import {v4 as uuidv4} from 'uuid'
import './shopping-cart.styles.css'

function ShoppingCart() {

    const selectCartState = (state : RootState) => state.shoppingCart.items
    const cartState = useSelector(selectCartState)
    
    return(
        <div className='shopping-cart-items-container'>
            {
                cartState.length > 0? cartState.map((item) =>{
                    return(
                        <div key={uuidv4()}>
                            <MenuItem
                                id={item.id}
                                title={item.title} 
                                subtitle={item.subtitle} 
                                imgUrl={item.imgUrl} 
                                price={item.price}
                                quantity={item.quantity}
                            />
                            <RemoveFromCartButton buttonText='pašalinti' item={item}/> 
                        </div>
                    )
                }) : <h2 className='cart-empty-text'>Krepšelis tuščias</h2>
            }
        </div>
        )
    }

    export default  ShoppingCart;
