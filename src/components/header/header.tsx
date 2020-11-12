import React from 'react'
import {Link} from 'react-router-dom'
import SearchBar from '../search-bar/search-bar'
//import {ReactComponent as MagnifyingGlass } from '../../resources/glass.svg'

import './header.styles.css'

const Header= () => {
    return(
        <div className="header">
            <Link to='/'>
            <h2 className='header-title'> Garazo isparduotuve </h2>
            </Link>
            <SearchBar/>
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
        </div>
    )
}

export default Header;