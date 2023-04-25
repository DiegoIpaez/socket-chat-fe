import { type Socket } from 'socket.io-client';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUser } from '../../redux/states/user';
import { getSocket } from '../../utils/socket.utility';
import { getLocalStorage } from '../../utils/localStorage.utility';
import { NotSelectedChat, Messages } from '../../components/Chat';
import { InboxPeople } from '../../components/Chat/InboxPeople/InboxPeople';

const Chat = () => {
  const allowChat = true;
  const token = getLocalStorage('token');

  const socket = useRef<Socket | null>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token && !socket.current) {
      socket.current = getSocket(token);
      socket.current.emit('online');
    }
  }, [token]);

  const logOut = () => {
    if (socket.current) {
      socket.current.emit('offline');
    }
    dispatch(resetUser());
    navigate('/');
  };

  return (
    <div className="chatContainer">
      <InboxPeople logOut={logOut} />
      {allowChat ? <Messages /> : <NotSelectedChat />}
    </div>
  );
};

export default Chat;
