import { useDispatch } from 'react-redux';
import { ContactItemList, BtnDelete } from './ContactsListItem.styled';
import { deleteContact } from 'components/redux/contactsSlice';

export const ContactsListItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  return (
    <ContactItemList>
      <p>{name}</p>
      <p>{number}</p>
      <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </BtnDelete>
    </ContactItemList>
  );
};
