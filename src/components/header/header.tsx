import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import CartWidget from '../shopping-cart-widget/shopping-cart-widget'
import WidgetButton from '../shopping-cart-widget/widget-button/widget-button'
import {RootState} from '../../redux/root-reducer/root-reducer'

import './header.styles.css'

const Header= () => {

    const selectWidgetState = (state : RootState) => state.widget
    const widgetState = useSelector(selectWidgetState)

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
            <div className='widget-and-cart-components'>
            {
                widgetState.showCart? <CartWidget/>  : null
            }
            <WidgetButton/>
            
            </div>
        </div>
    )
}

export default Header;