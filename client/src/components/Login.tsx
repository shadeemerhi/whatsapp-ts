import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';


interface Props {
  onSubmitId: (id: string) => void;
}

export default function Login(props: Props) {

  const [id, setId] = useState('');

  const handleSubmit = function(e:any) {
    e.preventDefault();

    props.onSubmitId(id);

  }

  const createNewId = function() {
    props.onSubmitId(uuidV4());
  }
  
  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" value={id} onChange={(event:any) => setId(event.target.value)}></Form.Control>
        </Form.Group>
        <Button type="submit" className="mr-2">Login</Button>
        <Button onClick={createNewId} variant="secondary">Create a New ID</Button>
      </Form>
    </Container>
  )
}
