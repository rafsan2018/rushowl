import React, { useState,useCallback,useMemo } from 'react';
import { Formik, Form } from 'formik';
import FormikControl from '../formik-controls/formikControl';
import axios from 'axios';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const initialValues = {
    email: '' || email,
    password: '' || password
  };

  const isValidEmail = useMemo(() => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, [email]);

  const handleSubmit = useCallback(async (values) => {
    if (!isValidEmail) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('https://www.sample.app/login', {
        email: values.email,
        password: values.password,
      });
      console.log('Login success:', response.data);
      // handle success
    } catch (error) {
      console.error('Login error:', error);
      // handle error
    }
  }, [email, password, isValidEmail]);


  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, setFieldValue) => {
    const newEmail = e.target.value;
    setFieldValue('email', newEmail);
    setEmail(newEmail);
  }, []);

  const handlepassChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, setFieldValue) => {
    const newEmail = e.target.value;
    setFieldValue('password', newEmail);
    setPassword(newEmail);
  }, []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({setFieldValue}) => (
          <Form className='w-full m-10'>
            <div className=''>
              <FormikControl
                control='input'
                type='text'
                name='email'
                placeholder='Username'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleEmailChange(e, setFieldValue)
                  }
                className={`text-xs xl:w-72 lg:w-48 xs:w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
              />
              <FormikControl
                control='input'
                type='text'
                name='password'
                placeholder='Password'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handlepassChange(e, setFieldValue)
                  }
                className={`text-xs xl:w-72 lg:w-48 xs:w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
              />
            </div>
            <div className='pt-5'>
              <button
                className={`flex bg-black lxl:w-72 lg:w-48 xs:w-full uppercase font-monsterrat font-semibold border-black border-2 py-2 px-4 text-white text-left`}
                type='submit'
              >
                Submit
              </button>
            </div>
            <p>{errorMessage && <div>{errorMessage}</div>}</p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
