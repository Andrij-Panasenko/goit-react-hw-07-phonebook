import { GlobalStyle } from './GlobalStyle';

import { Wrapper } from './Wrapper.styled';
import { ContactAddForm } from './ContactAddForm/ContactAddForm';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/seceltors';
import Notiflix from 'notiflix';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading
        ? Notiflix.Loading.dots('Please, wait...')
        : Notiflix.Loading.remove()}
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactAddForm />
        <Title title="Contacts" />
        <Filter />
        <ContactList />
      </Wrapper>
      <GlobalStyle />
    </>
  );
};
