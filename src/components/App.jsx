import { GlobalStyle } from './GlobalStyle';

import { Wrapper } from './Wrapper.styled';
import { ContactAddForm } from './ContactAddForm/ContactAddForm';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';


export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactAddForm />
        <Title title="Contacts" />
        <Filter />
        <ContactList />
      </Wrapper>
    </>
  );
};
