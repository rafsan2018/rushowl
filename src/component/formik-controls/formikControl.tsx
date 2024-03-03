import React from 'react';
import Input,{InputProps} from './Input'; // Import Input component

// Define InputProps interface here

// Define FormikControlProps interface by extending InputProps
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


