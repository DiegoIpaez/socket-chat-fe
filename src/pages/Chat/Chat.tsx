import { type Socket } from 'socket.io-client';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import styles from './chat.module.css';
import { resetUser } from '../../redux/states/user';
import { getSocket } from '../../utils/socket.utility';
import { getLocalStorage } from '../../utils/localStorage.utility';
import { NotSelectedChat, Messages } from '../../components/Chat';
import { type IUser } from '../../interfaces';
import Sidebar from '../../components/Chat/Sidebar/Sidebar';

const Chat = () => {
  const allowChat = true;
  const token = getLocalStorage('token');

  const socket = useRef<Socket | null>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [users, setUsers] = useState<Array<IUser>>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  useEffect(() => {
    setLoadingUsers(true);
    if (token && !socket.current) {
      socket.current = getSocket(token);
      socket.current.emit('online');
      socket.current?.on('user-list', (data) => {
        setUsers(data?.users ?? []);
        setLoadingUsers(false);
      });
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
    <div className={styles.chatContainer}>
      <div className={styles.inboxPeopleContainer}>
        <div className={styles.inboxPeopleNav}>
          <div className={styles.recentHeading}>
            <h4>Recientes</h4>
          </div>
          <div>
            <Button danger size="small" onClick={() => logOut()}>
              Salir
            </Button>
          </div>
        </div>
        <Sidebar users={users} loadingUsers={loadingUsers} />
      </div>
      {allowChat ? <Messages /> : <NotSelectedChat />}
    </div>
  );
};

export default Chat;
