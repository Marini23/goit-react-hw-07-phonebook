import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  StyledForm,
  Label,
  StyledField,
  StyledButton,
  ErrorMsg,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const nameRegex = /[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const numberRegex =
  /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/;

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(nameRegex, {
      message: `Name may contain only letters, apostrophe, dash and spaces.`,
    })
    .required('Required'),
  number: Yup.string()
    .matches(numberRegex, {
      message: `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.`,
    })
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          const isExist = contacts.find(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
          );
          if (isExist) {
            return alert(`${values.name} is already in contacts!`);
          }
          dispatch(addContact(values));
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Label htmlFor="name">
            Name
            <StyledField
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMsg name="name" component="div" />
          </Label>
          <Label htmlFor="number">
            Number
            <StyledField
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMsg name="number" component="div" />
          </Label>
          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </div>
  );
};
