import React from 'react'
import './custom-button.styles.scss'

interface Props {
    buttonText : string,
    wide?: true | undefined,
    remove?: true | undefined,
    handleClick?: () => void,
    type? : "button" | "submit" | "reset" | undefined
}


const CustomButton = ({buttonText, handleClick, wide, remove, type}: Props) =>(
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