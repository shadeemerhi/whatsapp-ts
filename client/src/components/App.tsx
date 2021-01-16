import { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {

  const [id, setId] = useLocalStorage('id', '');

  return (
    <>
    {id ? <Dashboard id={id}/>: <Login onSubmitId={setId}/>}
    </>
  );
}

export default App;
