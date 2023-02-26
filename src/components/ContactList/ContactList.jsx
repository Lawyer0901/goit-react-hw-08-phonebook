import { ContactListItem } from './ContactLisItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Table, Wraper, Tabledata } from '../ContactList/ContactList.styled';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contact/contact.operation';
import { getFilter } from 'redux/filter/filter.selector';
import { getItems } from 'redux/contact/contact.selectors';
// import { Loader } from 'components/Loader/Loader';

export function ContactList() {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  // const isLoading = useSelector(getIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length > 0 ? (
        <Wraper>
          <Table>
            <thead>
              <tr>
                <Tabledata>Contact Name</Tabledata>
                <Tabledata>Contact number</Tabledata>
                <Tabledata>Delete Contact</Tabledata>
              </tr>
            </thead>
            {/* {isLoading && <Loader />} */}
            {filteredContacts.map(el => {
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
        <p>There is no Contacts</p>
      )}
    </>
  );
}
