import React from 'react'
import './menu-item.styles.scss'
import {menuItem} from '../../redux/types/types'
import AddToCartButton from '../add-to-cart-button/add-to-cart-button'


const MenuItem = ({title, imgUrl, subtitle, price, quantity, item}: menuItem)=> {
    return(
        <div className="menu-item-container">
            <div 
            className='img' 
            style={{
                backgroundImage: `url(${imgUrl})`
            }}/>
            <div className="text">
    <h3 className='title'>{title}</h3>
    <p className='subtitle'>{subtitle}</p>
    <p className='price'>Vnt kaina: {price} $</p>
        {quantity > 0 ? <div>
            <p>Kiekis: {quantity}</p>
        <p className="full-price">Bendra kaina: {quantity * price} $</p>
            </div>
             : null}
            <AddToCartButton buttonText='Į krepšelį' item={item}/>
            </div>
        </div>
    )
}

export default MenuItem