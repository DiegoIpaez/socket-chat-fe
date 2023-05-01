/* eslint-disable react/self-closing-comp */
import { Spin } from 'antd';
import styles from './sidebar.module.css';
import SidebarChatItem from './components/SidebarChatItem';
import { IUser } from '../../../interfaces';

interface Props {
  users: IUser[];
  loadingUsers: boolean;
}
const Sidebar = ({ users, loadingUsers }: Props) => {
  return (
    <Spin spinning={loadingUsers} size="large">
      <div className={styles.inboxChat}>
        {users.map((user) => (
          <SidebarChatItem key={user.uid} user={user} />
        ))}

        <div className={styles.extraSpace}></div>
      </div>
    </Spin>
  );
};

export default Sidebar;
