import { Formik } from 'formik';
import {
  Form,
  Field,
  FormField,
  ErrorMessage,
  Button,
} from './ContactAddForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/seceltors';
import { addContact } from 'redux/operations';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').required('Name is required'),
  number: Yup.number().required('Must be filled'),
});

export const ContactAddForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addNewContact = newContact => {
    const hasContact = contacts.some(
      contact => contact.name === newContact.name
    );

    if (hasContact) {
      alert('A contact with that name already exists');
      return;
    }
    dispatch(addContact(newContact));
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          addNewContact(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FormField>
            Name:
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />
          </FormField>

          <FormField>
            Number:
            <Field name="number" type="tel" />
            <ErrorMessage name="number" component="span" />
          </FormField>

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};
