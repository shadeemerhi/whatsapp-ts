import { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import useLocalStorage from '../hooks/useLocalStorage';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';

function App() {

  const [id, setId] = useLocalStorage('id', '');

  return (
    <ContactsProvider>
      <ConversationsProvider>
        {id ? <Dashboard id={id}/>: <Login onSubmitId={setId}/>}
      </ConversationsProvider>
    </ContactsProvider>
  );
}

export default App;
