import React from 'react';
import { Field } from 'formik';


// Define the expected props interface for the Input component
export interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  [key: string]: any; // Allow any other props for flexibility, but consider improving type safety
}

// Define the Input component using React.FC for clarity and type safety
const Input: React.FC<InputProps> = ({ label, name, placeholder, ...rest }) => {
  return (
    <div className="mb-3 flex flex-col">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} placeholder={placeholder} {...rest} />

    </div>
  );
};

export default Input;

