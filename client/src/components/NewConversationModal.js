import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { useContacts } from '../contexts/ContactsProvider';
import { useConversations } from '../contexts/ConversationsProvider';

export default function NewConversationModal(props) {

  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  const handleSubmit = function(e) {
    e.preventDefault();

    createConversation(selectedContactIds);
    props.closeModal();
  }

  const handleCheckboxChange = function(contactId) {
    setSelectedContactIds(prev => {
      if(prev.includes(contactId)) {
        return prev.filter(prevId => {
          return contactId === prevId
        })
      } else {
        return [...prev, contactId]
      }
    })
  }

  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map(contact => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}
