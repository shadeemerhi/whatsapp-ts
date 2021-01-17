import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../contexts/ConversationsProvider';

export default function Contacts() {

  const { conversations } = useConversations();

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation:any, index:number) => {
        return <ListGroup.Item key={index}>
          {conversation.recipients.map((recipient:any) => recipient.name).join(', ')}
        </ListGroup.Item>
      })}
    </ListGroup>
  )
}
