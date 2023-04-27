import styles from '../sidebar.module.css';
import { IUser } from '../../../../interfaces';

interface Props {
  user: IUser,
}

const SidebarChatItem = ({ user }: Props) => (
  <div className={styles.chatList}>
    <div className={styles.chatPeople}>
      <div className={styles.chatImg}>
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div className={styles.chatib}>
        <h5>{user?.username ?? '-'}</h5>
        {
          user?.online
            ? (<span className="text-success">Online</span>)
            : (<span className="text-danger">Offline</span>)
        }
      </div>
    </div>
  </div>
);

export default SidebarChatItem;
