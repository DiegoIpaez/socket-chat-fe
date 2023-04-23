import styles from './message.module.css';
import { IncomingMessage, OutgoingMessage, SendMessage } from './components';

export const Messages = () => {
  const msgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.msgContainer}>
      <div className={styles.msgHistory}>
        {msgs.map((msg) => (msg % 2 ? (
          <IncomingMessage key={msg} />
        ) : (
          <OutgoingMessage key={msg} />
        )))}
      </div>
      <SendMessage />
    </div>
  );
};
