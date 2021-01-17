import { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useConversations } from '../contexts/ConversationsProvider';

export default function OpenConversation() {

  const [message, setMessage] = useState('');
  const { sendMessage, selectedConversation } = useConversations();

  const handleSubmit = function(e:any) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((recipient:any) => recipient.id),
      message
    )
    setMessage('');
  }

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">

      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
          <Form.Control 
            as="textarea"
            required
            value={message}
            onChange={event => setMessage(event.target.value)}
            style={{ height: '75px', resize: 'none' }}
          />
          <InputGroup.Append>
          </InputGroup.Append>
            <Button type="submit">Send</Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  )
}
