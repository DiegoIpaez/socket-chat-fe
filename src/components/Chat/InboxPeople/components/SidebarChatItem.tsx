import styles from '../inboxPeople.module.css';

const SidebarChatItem = () => (
  <div className={styles.chatList}>
    <div className={styles.chatPeople}>
      <div className={styles.chatImg}>
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div className={styles.chatib}>
        <h5>Some random name</h5>
        {/* <span className="text-success">Online</span> */}
        <span className="text-danger">Offline</span>
      </div>
    </div>
  </div>
);

export default SidebarChatItem;
