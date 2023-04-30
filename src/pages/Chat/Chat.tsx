import { type Socket } from 'socket.io-client';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import styles from './chat.module.css';
import { resetUser } from '../../redux/states/user';
import { getSocket } from '../../utils/socket.utility';
import { getLocalStorage } from '../../utils/localStorage.utility';
import { NotSelectedChat, Messages } from '../../components/Chat';
import type { IUser } from '../../interfaces';
import Sidebar from '../../components/Chat/Sidebar/Sidebar';
import { AppStore } from '../../redux/store';

const Chat = () => {
  const user = getLocalStorage('user');
  const token = getLocalStorage('token');

  const socket = useRef<Socket | null>();
  const chatState = useSelector((store: AppStore) => store.chat);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [users, setUsers] = useState<Array<IUser>>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  useEffect(() => {
    setLoadingUsers(true);
    if (token && !socket.current) {
      socket.current = getSocket(token);
      socket.current.emit('online');
    }
  }, [token]);

  useEffect(() => {
    if (socket?.current) {
      socket?.current?.on('user-list', (data) => {
        if (!data?.users) {
          setUsers([]);
        } else {
          const chatUsers = data.users.filter(
            (chatUser: IUser) => chatUser?.uid !== user.uid,
          );
          setUsers(chatUsers);
          setLoadingUsers(false);
        }
      });
    }
  }, [socket, user]);

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
      {chatState.activeChat && chatState.recipientId ? (
        <Messages socket={socket} uid={user.uid} recipientId={chatState.recipientId} />
      ) : (
        <NotSelectedChat />
      )}
    </div>
  );
};

export default Chat;
