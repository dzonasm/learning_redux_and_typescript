import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import './add-to-cart-button.styles.css'

interface Props {
    id: number
}

const AddToCartButton: React.FC<Props> = ({id})=>{
    const dispatch = useDispatch()


    const state = useSelector((state: {
        items: {
            items: any[];
        };
        shoppingCart: any;
    }) => state.shoppingCart)
    
    console.log(state)

    
    const handleClick = ()=>{
        console.log(id)
        const newItem= ()=>{
            return(
                null
            )
        }
        dispatch({type:"NEW_ITEM_ADDED", payload: newItem })
    }

    return(
        <button onClick={handleClick}>ADD TO CART</button>
    )
}

export default AddToCartButton;