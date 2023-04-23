import styles from '../message.module.css';

export const IncomingMessage = () => (
  <div className="incoming_msg">
    <div className={styles.incomingMsgImg}>
      <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
    </div>
    <div className={styles.receivedMsg}>
      <div className={styles.receivedWithMsg}>
        <p>Test which is a new approach to have all solutions</p>
        <span className={styles.timeDate}> 11:01 AM | June 9</span>
      </div>
    </div>
  </div>
);
