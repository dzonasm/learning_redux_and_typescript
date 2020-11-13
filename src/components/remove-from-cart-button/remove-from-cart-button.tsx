import React from 'react'
import {useDispatch} from 'react-redux'
import {ITEM_REMOVED} from '../../redux/types/types'

import './remove-button-styles.css'


interface Props {
    item : string | undefined
    buttonText: string
}

const RemoveFromCartButton: React.FC<Props> = ({item, buttonText})=>{
    const dispatch = useDispatch()

    
    const handleClick = ()=>{
        dispatch({type: ITEM_REMOVED, payload: item })
    }

    return(
    <button className='remove-button' onClick={handleClick}>{buttonText.toUpperCase()}</button>
    )
}

export default RemoveFromCartButton;