import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/root-reducer/root-reducer'
import MenuItem from '../menu-item/menu-item'
import RemoveFromCartButton from '../remove-from-cart-button/remove-from-cart-button'
import {v4 as uuidv4} from 'uuid'

function ShoppingCart() {

    const selectCartState = (state : RootState) => state.shoppingCart.items
    const cartState = useSelector(selectCartState)
    console.log(cartState)
    
    return(
        <div>
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
                            <RemoveFromCartButton buttonText='remove from cart' item={item}/> 
                        </div>
                    )
                }) : <p>Krepselis tuscias</p>
            }
        </div>
        )
    }

    export default  ShoppingCart;
