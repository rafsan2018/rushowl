import React from 'react';
import Input,{InputProps} from './Input'; 


interface FormikControlProps extends InputProps {
  control: 'input';
}

const FormikControl: React.FC<FormikControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;


