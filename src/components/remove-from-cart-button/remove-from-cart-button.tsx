import React from 'react'
import {useDispatch} from 'react-redux'
import {ITEM_REMOVED, shopItem} from '../../redux/types/types'
import CustomButton from '../custom-button/custom-button.component'

import './remove-button-styles.css'


interface Props {
    item : shopItem
    buttonText: string
}

const RemoveFromCartButton: React.FC<Props> = ({item, buttonText})=>{
    const dispatch = useDispatch()

    
    const handleClick = ()=>{
        dispatch({type: ITEM_REMOVED, payload: item })
    }

    return(
    <CustomButton remove buttonText={buttonText} handleClick={handleClick}></CustomButton>
    )
}

export default RemoveFromCartButton;