import './chat.css';
import { NotSelectedChat, Messages } from '../../components/Chat';
import { InboxPeople } from '../../components/Chat/InboxPeople/InboxPeople';

const Chat = () => {
  const a = 1;

  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />
        <Messages />
        {/* <NotSelectedChat /> */}
      </div>
    </div>
  );
};

export default Chat;
