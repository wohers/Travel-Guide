import React from 'react'
import FormInput from './FormInput'
import Button from '../../../components/Button/Button'

const Form = ({ id }) => {
    return (
        <form id={id}>
            <FormInput type="email" id="emailInput" placeholder="Введите ваш email" required />
            <Button type="submit">Отправить</Button>
        </form>
    )
}

export default Form