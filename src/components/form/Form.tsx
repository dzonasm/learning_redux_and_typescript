import React, {useRef} from 'react'
import {useDispatch } from 'react-redux'

import './form.styles.css'

const Form: React.FC = () => {


    const title = useRef<HTMLInputElement>(null)
    const subtitle = useRef<HTMLInputElement>(null)
    const price = useRef<HTMLInputElement>(null)
    const imgUrl = useRef<HTMLInputElement>(null)
    const id = Math.random()
    
    const dispatch = useDispatch()
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault()
        dispatch({type: 'ADD_NEW_ITEM', payload: {
            id: id,
            title: title.current?.value,
            subtitle: subtitle.current?.value,
            price: price.current?.value,
            imgUrl: imgUrl.current?.value
        }})
    }
    
    return(


        <div className='form-container'>
            <form className= 'form'onSubmit={handleSubmit}>
                <input type='text' placeholder='title' ref={title} required={true}></input>
                <input type='text' placeholder='subtitle' ref={subtitle} required={true}></input>
                <input type='text' placeholder='price' ref={price} required={true}></input>
                <input type='text' placeholder='image URL' ref={imgUrl} required={true}></input>
                <button type='submit'>Prideti skelbima</button>
            </form>
        </div>
    )
}

export default Form;