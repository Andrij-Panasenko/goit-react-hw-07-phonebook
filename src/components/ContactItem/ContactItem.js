import { useDispatch } from 'react-redux';
import { Button, Contact, NameWrapp } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ values: { id, name, number } }) => {
  const dispatch = useDispatch(); //to delete contact by onClick

  return (
    <Contact>
      <NameWrapp>
        <p>{name}:</p>
        <p>{number}</p>
      </NameWrapp>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        x
      </Button>
    </Contact>
  );
};
