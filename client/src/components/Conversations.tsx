import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../contexts/ConversationsProvider';

export default function Contacts() {

  const { conversations, selectedConversationIndex } = useConversations();

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation:any, index:number) => (
        <ListGroup.Item 
          key={index}
          action
          onClick={() => selectedConversationIndex(index)}
          active={conversation.selected}
        >
          {conversation.recipients.map((recipient:any) => recipient.name).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
