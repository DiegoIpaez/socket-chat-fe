import { Button } from 'antd';
import styles from './inboxPeople.module.css';
import Sidebar from './components/Sidebar';

interface Props {
  logOut: () => void;
}

export const InboxPeople = ({ logOut }: Props) => {
  return (
    <div className={styles.inboxPeopleContainer}>
      <div className={styles.inboxPeopleNav}>
        <div className={styles.recentHeading}>
          <h4>Recientes</h4>
        </div>
        <div>
          <Button danger size="small" onClick={() => logOut()}>Salir</Button>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};
