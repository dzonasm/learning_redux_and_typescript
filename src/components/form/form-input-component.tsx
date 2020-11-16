import React from 'react'


interface FormInputProps {
    name : string
    handleChange : ()=>void
}

const FormInput: React.FC<FormInputProps>= ({name, handleChange}) => {

    return(
        <div className='form-input'>
                <input type='text' required={true} onChange={handleChange}>
                </input>
                <label className='input-label'>
    <span className='content-label'>{name.toUpperCase()}</span>
                </label>
                </div>
    )
}

export default FormInput