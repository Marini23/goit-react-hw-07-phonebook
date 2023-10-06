import { useDispatch } from 'react-redux';
import { ContactItemList, BtnDelete, Phone } from './ContactsListItem.styled';
import { deleteContact } from 'redux/operations';

export const ContactsListItem = ({ contact }) => {
  const { id, name, phone } = contact;
  const dispatch = useDispatch();
  return (
    <ContactItemList>
      <p>{name}</p>
      <Phone>{phone}</Phone>
      <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </BtnDelete>
    </ContactItemList>
  );
};
