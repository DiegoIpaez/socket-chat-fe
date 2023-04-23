import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { resetUser } from '../../../redux/states/user';
import styles from './inboxPeople.module.css';
import Sidebar from './components/Sidebar';

export const InboxPeople = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(resetUser());
    navigate('/');
  };

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
