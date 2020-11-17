import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/root-reducer/root-reducer'
import CartItem from '../cart-item/cart-item.component'
import {v4 as uuidv4} from 'uuid'
import './shopping-cart.styles.css'

function ShoppingCart() {

    const selectCartState = (state : RootState) => state.shoppingCart.items
    const cartState = useSelector(selectCartState)
    
    return(
        <div className='shopping-cart-items-container'>
            {
                cartState.length > 0? cartState.map((item) =>{
                    const {id, title, subtitle, imgUrl, price, quantity} = item
                    return(
                        <div key={uuidv4()}>
                            <CartItem
                                item={item}
                                id={id}
                                title={title} 
                                subtitle={subtitle} 
                                imgUrl={imgUrl} 
                                price={price}
                                quantity={quantity}
                            />
                        </div>
                    )
                }) : <h2 className='cart-empty-text'>Krepšelis tuščias</h2>
            }
        </div>
        )
    }

    export default  ShoppingCart;
