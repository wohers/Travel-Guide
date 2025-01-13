import React from 'react';
import FormInput from './FormInput';
import Button from '../../../components/Button/Button';

const Form = ({ id, onSubmit, ref }) => {
    return (
        <form id={id} onSubmit={onSubmit}>
            <FormInput
                type="email"
                id="emailInput"
                placeholder="Введите ваш email"
                required
                ref={ref} 
            />
            <Button type="submit">Отправить</Button>
        </form>
    );
};

export default Form;