import { NotSelectedChat, Messages } from '../../components/Chat';
import { InboxPeople } from '../../components/Chat/InboxPeople/InboxPeople';

const Chat = () => {
  const allowChat = true;
  return (
    <div className="chatContainer">
      <InboxPeople />
      {allowChat ? <Messages /> : <NotSelectedChat />}
    </div>
  );
};

export default Chat;
