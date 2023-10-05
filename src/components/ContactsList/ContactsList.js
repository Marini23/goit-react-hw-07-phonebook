import { useSelector } from 'react-redux';
import { ListContacts } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { getContacts } from 'components/redux/contactsSlice';
import { getFilter } from 'components/redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContact();
  return (
    <ListContacts>
      {visibleContacts.map(contact => (
        <ContactsListItem contact={contact} key={contact.id} />
      ))}
    </ListContacts>
  );
};
