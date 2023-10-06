import { useSelector } from 'react-redux';
import { ListContacts } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ListContacts>
      {contacts.map(contact => (
        <ContactsListItem contact={contact} key={contact.id} />
      ))}
    </ListContacts>
  );
};
