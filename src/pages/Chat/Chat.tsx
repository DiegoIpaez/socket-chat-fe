import { type Socket } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import type { IUser } from '@/interfaces';
import { AppStore } from '@/redux/store';
import { resetUser } from '@/redux/states/user';
import { resetChat } from '@/redux/states/chat';
import { getSocket } from '@/utils/socket.utility';
import {
  getLocalStorage,
  removeAllLocalStorage,
} from '@/utils/localStorage.utility';
import Sidebar from '@/components/Chat/Sidebar/Sidebar';
import { NotSelectedChat, Messages } from '@/components/Chat';
import styles from './chat.module.css';

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
      socket?.current?.on('user-list', (res) => {
        if (res?.data?.users) {
          const chatUsers = res?.data?.users?.filter(
            (chatUser: IUser) => chatUser?.uid !== user.uid,
          );
          setUsers(chatUsers);
        }
        if (res?.error) {
          if (res?.error?.includes('TokenExpiredError')) {
            removeAllLocalStorage();
            window.location.href = '/';
          } else {
            setUsers([]);
          }
        }
        setLoadingUsers(false);
      });
    }
  }, [socket, user]);

  const logOut = () => {
    if (socket.current) {
      socket.current.emit('offline', user.uid);
    }
    dispatch(resetUser());
    dispatch(resetChat());
    navigate('/');
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.inboxPeopleContainer}>
        <div className={styles.inboxPeopleNav}>
          <div className={styles.recentHeading}>
            <h4>{!user?.username ? 'Recientes' : user?.username}</h4>
          </div>
          <div>
            <Tooltip placement="left" title="Cerrar sesión">
              <LogoutOutlined className={styles.logoutBtn} onClick={logOut} />
            </Tooltip>
          </div>
        </div>
        <Sidebar users={users} loadingUsers={loadingUsers} />
      </div>
      {chatState.activeChat && chatState.recipientId ? (
        <Messages
          socket={socket}
          uid={user.uid}
          recipientId={chatState.recipientId}
        />
      ) : (
        <NotSelectedChat />
      )}
    </div>
  );
};

export default Chat;
