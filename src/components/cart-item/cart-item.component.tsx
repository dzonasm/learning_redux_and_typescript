import React from 'react'
import {menuItem} from '../../redux/types/types'
import RemoveFromCartButton from '../remove-from-cart-button/remove-from-cart-button'
import AddRemoveSingleItem from '../add-remove-single-item/add-remove-single-item.component'

import './cart-item.styles.scss'


const CartItem = ({title, imgUrl, price, quantity, item}: menuItem)=> {
    return(
        <div className="cart-item-container">
            <img src={imgUrl} alt={title}></img>
            <div className="cart-item-text">
    <h3 className='title'>{title}</h3>
    <p className='price'>Vnt kaina: {price} $</p>
        {quantity > 0 ? <div>
            <p>Kiekis: {quantity}</p>
        <p className="full-price">Bendra kaina: {quantity * price} $</p>
            </div>
             : null}
            <AddRemoveSingleItem item={item}/>
            <RemoveFromCartButton buttonText='Pašalinti' item={item}/>
            </div>
        </div>
    )
}

export default CartItem