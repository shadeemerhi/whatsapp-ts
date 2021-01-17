import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

interface Props {
  closeModal: () => void;
}

export default function NewContactModal(props: Props) {

  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = function(e:any) {
    e.preventDefault();

    // createContact(id, name);
    props.closeModal();
  }



  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control 
              type="text" 
              value={id} 
              onChange={event => setId(event.target.value)} 
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={event => setName(event.target.value)} required />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}
