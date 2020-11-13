import React from 'react'
import {useDispatch} from 'react-redux'
import {shopItem, ITEM_REMOVED} from '../../redux/types/types'

import './remove-button-styles.css'


interface Props {
    item : shopItem
    buttonText: string
}

const RemoveFromCartButton: React.FC<Props> = ({item, buttonText})=>{
    const dispatch = useDispatch()

    
    const handleClick = ()=>{
        console.log(item.id)
        dispatch({type: ITEM_REMOVED, payload: item })
    }

    return(
    <button className='remove-button' onClick={handleClick}>{buttonText.toUpperCase()}</button>
    )
}

export default RemoveFromCartButton;