import { useState } from 'react';
import Login from './Login'

function App() {

  const [id, setId] = useState('');

  return (
    <>
    {id}
    <Login onSubmitId={setId}/>
    </>
  );
}

export default App;
