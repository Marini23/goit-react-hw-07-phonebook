import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from './ClobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && <ContactList />}
      <GlobalStyle />
    </div>
  );
};
