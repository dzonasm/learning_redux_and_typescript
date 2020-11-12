import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/root-reducer/root-reducer'

    function ShoppingCart() {

    const cartState = useSelector<RootState>(state => state.shoppingCart.items)
        console.log(cartState)

        

        return(
            <div>
                <h2>The Cart</h2>
                <div></div>
            </div>
            )
        }

        export default  ShoppingCart;
