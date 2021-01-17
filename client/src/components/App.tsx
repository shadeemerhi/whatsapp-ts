import { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import useLocalStorage from '../hooks/useLocalStorage';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import { SocketProvider } from '../contexts/SocketProvider';

function App() {

  const [id, setId] = useLocalStorage('id', '');

  return (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          {id ? <Dashboard id={id}/>: <Login onSubmitId={setId}/>}
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );
}

export default App;
