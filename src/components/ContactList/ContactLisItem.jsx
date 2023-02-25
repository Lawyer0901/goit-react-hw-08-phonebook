import { Tabledata, DeleteButton } from '../ContactList/ContactList.styled';

export function ContactListItem({ name, phone, onClick }) {
  return (
    <>
      <tbody>
        <tr>
          <Tabledata>{name}</Tabledata>
          <Tabledata>{phone}</Tabledata>
          <Tabledata>
            <DeleteButton onClick={onClick}>Delete contact</DeleteButton>
          </Tabledata>
        </tr>
      </tbody>
    </>
  );
}
