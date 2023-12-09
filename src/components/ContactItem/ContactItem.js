import { useDispatch } from 'react-redux';
import { Button, Contact, NameWrapp } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';
// import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ values: { id, name, phone } }) => {
  const dispatch = useDispatch(); //to delete contact by on click


  return (
    <Contact>
      <NameWrapp>
        <p>{name}:</p>
        <p>{phone}</p>
      </NameWrapp>
      <Button
        type="button"
        data-id={id}
        onClick={() => dispatch(deleteContact(id))}
      >
        x
      </Button>
    </Contact>
  );
};
