import React from 'react'
import {useDispatch} from 'react-redux'
import {shopItem, NEW_ITEM_ADDED} from '../../redux/types/types'

import './add-to-cart-button.styles.css'

interface Props {
    item : shopItem
    buttonText: string
}

const AddToCartButton: React.FC<Props> = ({item, buttonText})=>{
    const dispatch = useDispatch()

    
    const handleClick = ()=>{
        console.log(item.id)
        dispatch({type: NEW_ITEM_ADDED, payload: item })
    }

    return(
    <button className='add-to-cart-button' onClick={handleClick}>{buttonText.toUpperCase()}</button>
    )
}

export default AddToCartButton;