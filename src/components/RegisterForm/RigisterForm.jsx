import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/auth.operation';
import { Container, Link } from 'components/Navigation/UserNavigation.styled';
import {
  Form,
  Label,
  Input,
  AddButton,
} from 'components/ContactForm/ContactForm.styled';
import Box from '@mui/material/Box';
import { Title } from 'components/ContactForm/ContactForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const [values, setValues] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeInput = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  console.log(values);
  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(register(values));
    setIsLoading(false);
    setValues(initialState);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Container>
        <Box
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: 300,
            height: 300,
            backgroundColor: 'RGB(28,245,20)',
          }}
        >
          <Title>Register Page</Title>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="">
              Name
              <Input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChangeInput}
              />
            </Label>
            <Label htmlFor="">
              Email
              <Input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChangeInput}
              />
            </Label>
            <Label htmlFor="">
              Password
              <Input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChangeInput}
              />
            </Label>
            <AddButton onSubmit={handleSubmit}>Register New User</AddButton>
          </Form>
          <Link to="/login">Already have registration?</Link>
        </Box>
      </Container>
    </>
  );
};
