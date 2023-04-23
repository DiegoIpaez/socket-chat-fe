/* eslint-disable react/self-closing-comp */
import styles from '../inboxPeople.module.css';
import SidebarChatItem from './SidebarChatItem';

const Sidebar = () => {
  const chats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={styles.inboxChat}>
      {chats.map((chat) => (
        <SidebarChatItem key={chat} />
      ))}

      <div className={styles.extraSpace}></div>
    </div>
  );
};

export default Sidebar;
