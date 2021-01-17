import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';

interface Props {
  id: string
}

export default function Dashboard(props: Props) {

  const { selectedConversation } = useConversations();
  
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar id={props.id}/>
      {selectedConversation && <OpenConversation />}
    </div>
  )
}
