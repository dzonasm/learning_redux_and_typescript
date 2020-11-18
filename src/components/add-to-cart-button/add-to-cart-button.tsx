import React from 'react'
import {useDispatch} from 'react-redux'
import { NEW_ITEM_ADDED, addToCartButtonProps} from '../../redux/types/types'
import CustomButton from '../custom-button/custom-button.component'
 
import './add-to-cart-button.styles.scss'

const AddToCartButton: React.FC<addToCartButtonProps> = ({item, buttonText})=>{
    const dispatch = useDispatch()

    
    const handleClick = ()=>{
        console.log(item.id)
        dispatch({type: NEW_ITEM_ADDED, payload: item })
    }

    return(
    <CustomButton buttonText={buttonText} handleClick={handleClick}></CustomButton>
    )
}

export default AddToCartButton;