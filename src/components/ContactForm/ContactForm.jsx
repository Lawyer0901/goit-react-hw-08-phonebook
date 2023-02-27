import { useState } from 'react';

import { Form, Label, Input, AddButton, Title } from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import { addContact } from 'redux/contact/contact.operation';
import { getItems } from 'redux/contact/contact.selectors';
export const ContactForm = () => {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);
  // console.log(contacts);
  const handleChangeName = e => {
    const { name, value } = e.target;
    if (name === 'userName') {
      setUserName(value);
    } else if (name === 'userNumber') {
      setUserNumber(value);
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();

    const newUser = { name: userName, number: userNumber };

    const existUser = contacts.some(el => el.name === newUser.name);

    if (newUser === null || existUser) {
      alert(`${newUser.name} is already in contacts`);
      return;
    } else {
      dispatch(addContact(newUser));
      setUserName('');
      setUserNumber('');
      console.log(newUser);
    }
  };

  return (
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
        textAlign: 'center',
      }}
    >
      <Title>Enter Name and Phone</Title>
      <Form onSubmit={hendleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="userName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChangeName}
            value={userName}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="userNumber"
            value={userNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChangeName}
          />
        </Label>
        <AddButton>Add Contact</AddButton>
      </Form>
    </Box>
  );
};
