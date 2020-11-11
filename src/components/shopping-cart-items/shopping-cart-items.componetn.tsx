import React from 'react'

type ShoppingCartItemProps ={
    title: string,
    imgUrl:string,
    subtitle: string,
    price: number
}

const SoppingCartItemItem = ({title, imgUrl, subtitle, price}: ShoppingCartItemProps)=> {
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
    <p className='price'>{price} $</p>
            </div>
        </div>
    )
}

export default SoppingCartItemItem