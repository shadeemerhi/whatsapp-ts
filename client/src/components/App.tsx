import { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import useLocalStorage from '../hooks/useLocalStorage';
import { ContactsProvider } from '../contexts/ContactsProvider';

function App() {

  const [id, setId] = useLocalStorage('id', '');

  return (
    <ContactsProvider>
      {id ? <Dashboard id={id}/>: <Login onSubmitId={setId}/>}
    </ContactsProvider>
  );
}

export default App;
