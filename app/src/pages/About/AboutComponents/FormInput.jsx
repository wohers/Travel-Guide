import React from 'react';
import { forwardRef } from 'react';

const FormInput = forwardRef(function FormInput(
  { type, id, placeholder, required },
  ref
) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
      ref={ref}
    />
  );
});

export default FormInput;
