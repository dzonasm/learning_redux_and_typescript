import React from 'react'
import {useDispatch} from 'react-redux'

import './add-to-cart-button.styles.css'

interface Props {
    item : {
        id: number,
        title : string,
        subtitle : string,
        price : number,
        imgUrl: string
    }
}

const AddToCartButton: React.FC<Props> = ({item})=>{
    const dispatch = useDispatch()

    
    const handleClick = ()=>{
        console.log(item.id)
        dispatch({type:"NEW_ITEM_ADDED", payload: item })
    }

    return(
        <button onClick={handleClick}>ADD TO CART</button>
    )
}

export default AddToCartButton;