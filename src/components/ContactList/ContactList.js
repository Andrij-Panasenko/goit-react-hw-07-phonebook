import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { Notify } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/seceltors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(item => (
            <ContactItem key={item.id} values={item} />
          ))
        ) : (
          <Notify>
            Your contatcs is empty. Please add contact to your list
          </Notify>
        )}
      </ul>
    </div>
  );
};
