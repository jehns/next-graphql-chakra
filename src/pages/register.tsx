import React from 'react'
import { Form, Formik } from 'formik'
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/core';
import Wrapper from '../components/Wrapper';


interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper>
    <Formik
      initialValues={{username: '', password: ''}}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {(values, handleChange) => (
        <Form>
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              value={values.username}
              id="username"
              placeholder="username"
              onChange={handleChange}
            />
            {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
          </FormControl>
        </Form>
      )}
    </Formik>
    </Wrapper>
  );
}

export default Register
