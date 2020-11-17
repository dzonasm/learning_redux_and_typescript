import React from 'react'
import {useDispatch} from 'react-redux'
import {shopItem, NEW_ITEM_ADDED} from '../../redux/types/types'
import CustomButton from '../custom-button/custom-button.component'
 
import './add-to-cart-button.styles.scss'

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
    <CustomButton buttonText={buttonText} handleClick={handleClick}></CustomButton>
    )
}

export default AddToCartButton;