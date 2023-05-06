/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux';
import { createChat } from '../../../../redux/states/chat';
import { IUser } from '../../../../interfaces';
import styles from '../sidebar.module.css';
import { AppStore } from '../../../../redux/store';
import recipientUserImg from '../../../../assets/recipient_user.png';

interface Props {
  user: IUser;
}

const SidebarChatItem = ({ user }: Props) => {
  const { recipientId } = useSelector((store: AppStore) => store.chat);
  const dispatch = useDispatch();

  const goToChat = () => {
    dispatch(
      createChat({
        activeChat: true,
        recipientId: user.uid,
      }),
    );
  };

  return (
    <div
      className={`${styles.chatList} ${
        recipientId === user.uid && styles.activeChat
      }`}
      onClick={() => goToChat()}
    >
      <div className={styles.chatPeople}>
        <div className={styles.chatImg}>
          <img
            src={recipientUserImg}
            alt="sunil"
          />
        </div>
        <div className={styles.chatib}>
          <h5>{user?.username ?? '-'}</h5>
          {user?.online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarChatItem;
