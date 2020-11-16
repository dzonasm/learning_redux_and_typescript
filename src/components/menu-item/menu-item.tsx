import React from 'react'
import './menu-item.styles.css'
import {shopItem} from '../../redux/types/types'


const MenuItem = ({title, imgUrl, subtitle, price, quantity}: shopItem)=> {
    return(
        <div className="add-container">
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
        <p>Bendra kaina: {quantity * price} $</p>
            </div>
             : null}
            </div>

        </div>
    )
}

export default MenuItem