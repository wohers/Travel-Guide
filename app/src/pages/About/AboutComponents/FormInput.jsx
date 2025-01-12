import React from 'react'

const FormInput = ({ type, id, placeholder }) => {
    return (
        <input type={type} id={id} placeholder={placeholder} required />
    )
}

export default FormInput