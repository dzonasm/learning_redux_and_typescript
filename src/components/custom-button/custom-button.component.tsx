import React from 'react'
import './custom-button.styles.scss'
import {customButtonProps} from '../../redux/types/types'


const CustomButton = ({buttonText, handleClick, wide, remove, type}: customButtonProps) =>(
        <button 
            type={type}
            onClick={handleClick} 
            className={`
            custom-button 
            ${ remove ? 'remove' : ''}
            ${ wide ? 'wide' : ''}
            `}
        >{buttonText.toUpperCase()}</button>
    )

export default CustomButton