import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from '../components/Navigation/UserNavigation.styled';

const Contacts = () => {
  return (
    <>
      <Container>
        <ContactForm />
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};

export default Contacts;
