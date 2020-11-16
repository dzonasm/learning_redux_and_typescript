import React, {useRef} from 'react'
import {useDispatch } from 'react-redux'
import {ADD_NEW_ITEM} from '../../redux/types/types'

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
        dispatch({type: ADD_NEW_ITEM , payload: {
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
                <label className='label'>Pavadinimas</label>
                <div className='form-input'>
                <input type='text' ref={title} required={true}>
                </input>
                <label className='input-label'>
                </label>
                </div>
                <label className='label'>Aprasymas</label>
                <div className='form-input'>
                <input type='text' ref={subtitle} required={true}>
                </input>
                <label className='input-label'>
                </label>
                </div>
                <br/>
                <label className='label'>Kaina $</label>
                <div className='form-input'>
                <input type='text' ref={price} required={true}>
                </input>
                <label className='input-label'>
                </label>
                </div>
                <label className='label'>Atvaizdo nuoroda</label>
                <div className='form-input'>
                <input type='text' ref={imgUrl} required={true}>
                </input>
                <label className='input-label'>
                </label>
                </div>
                <button type='submit' className='submit-button'>Prideti skelbima</button>
            </form>
        </div>
    )
}
export default Form;
/**
<label className='input-label'>Subtitle</label>
                <input type='text' ref={subtitle} required={true}></input>
                
                <label className='input-label' >Price</label>
                <input type='text' ref={price} required={true} name='text'></input>
                <label className='input-label'>Image Url</label>
                <input type='text' ref={imgUrl} required={true} name='imageUrl'></input>
 */