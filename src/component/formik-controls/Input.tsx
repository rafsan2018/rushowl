import React from 'react';
import { Field } from 'formik';


export interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  [key: string]: any; 
}

const Input: React.FC<InputProps> = ({ label, name, placeholder, ...rest }) => {
  return (
    <div className="mb-3 flex flex-col">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} placeholder={placeholder} {...rest} />

    </div>
  );
};

export default Input;

