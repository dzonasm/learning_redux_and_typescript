import React from 'react'
import {useDispatch} from 'react-redux'
import {ITEM_REMOVED, removeFromCartButttonProps} from '../../redux/types/types'
import CustomButton from '../custom-button/custom-button.component'

import './remove-button-styles.css'


const RemoveFromCartButton: React.FC<removeFromCartButttonProps> = ({item, buttonText})=>{
    const dispatch = useDispatch()

    
    const handleClick = ()=>{
        dispatch({type: ITEM_REMOVED, payload: item })
    }

    return(
    <CustomButton remove buttonText={buttonText} handleClick={handleClick}></CustomButton>
    )
}

export default RemoveFromCartButton;