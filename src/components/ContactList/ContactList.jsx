import { ContactListItem } from './ContactLisItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Table, Wraper, Tabledata } from '../ContactList/ContactList.styled';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contact/contact.operation';

export function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  const contactListToDisplay = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return contacts > 0 ? (
    <Wraper>
      <Table>
        <thead>
          <tr>
            <Tabledata>Contact Name</Tabledata>
            <Tabledata>Contact number</Tabledata>
            <Tabledata>Delete Contact</Tabledata>
          </tr>
        </thead>
        {contactListToDisplay.map(el => {
          return (
            <ContactListItem
              key={el.id}
              name={el.name}
              phone={el.number}
              onClick={() => dispatch(deleteContact(el.id))}
            />
          );
        })}
      </Table>
    </Wraper>
  ) : (
    <p>There is no contact</p>
  );
}
