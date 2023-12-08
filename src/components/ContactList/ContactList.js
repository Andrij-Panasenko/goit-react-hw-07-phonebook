import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { Notify } from './ContactList.styled';
import { getFilterValue } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilterValue);

  const filteredContacts = contacts.filter(item => {
    const hasContact = item.name.toLowerCase().includes(filters.toLowerCase());

    return hasContact;
  });

  return (
    <div>
      <ul>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(item => {
            return (
              <ContactItem
                key={item.id}
                values={item}
              />
            );
          })
        ) : (
          <Notify>
            Your contatcs is empty. Please add contact to your list
          </Notify>
        )}
      </ul>
    </div>
  );
};
