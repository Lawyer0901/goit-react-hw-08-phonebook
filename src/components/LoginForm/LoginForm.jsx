import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth.operation';
import { Container } from 'components/Navigation/UserNavigation.styled';
import {
  Form,
  Label,
  Input,
  AddButton,
} from 'components/ContactForm/ContactForm.styled';
import { Title } from 'components/ContactForm/ContactForm.styled';

// import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import { color } from 'framer-motion';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: '',
    password: '',
  };
  const [values, setValues] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeInput = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  //   console.log(values);
  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(login(values));
    setIsLoading(false);
    // setValues(initialState);
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
          <Title>Phonebook</Title>
          <Form onSubmit={handleSubmit}>
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
            <AddButton onSubmit={handleSubmit}>Login</AddButton>
          </Form>
        </Box>
      </Container>
    </>
  );
};
