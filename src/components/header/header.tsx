import React from 'react'
import {Link} from 'react-router-dom'
//import {ReactComponent as MagnifyingGlass } from '../../resources/glass.svg'
import CartWidget from '../shopping-cart-widget/shopping-cart-widget'

import './header.styles.css'

const Header= () => {
    return(
        <div className="header">
            <Link to='/'>
            <h2 className='header-title'> Garazo isparduotuve </h2>
            </Link>
            <div className='links'>
                <Link to='/skelbimai'>
                <p className='header-link'>Skelbimai</p>
                </Link>
                <Link to='/ikelti'>
                <p className='header-link'>Ikelti skelbima</p>
                </Link>
                <Link to='/cart'>
                <p className='header-link'>Shopping cart</p>
                </Link>
            </div>
            <CartWidget/>
        </div>
    )
}

export default Header;