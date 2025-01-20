import React from 'react';

const FormInput = React.forwardRef(function FormInput(
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
