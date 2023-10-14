import styles from '../message.module.css';
import { IMessage } from '../../../../interfaces';
import recipientUserImg from '../../../../assets/recipient_user.png';
import { LOCALE_DATE } from '../../../../utils/constants';

interface Props {
  message: IMessage;
}

export const IncomingMessage = ({ message }: Props) => (
  <div className={styles.incomingMsg}>
    <div className={styles.incomingMsgImg}>
      <img src={recipientUserImg} alt="sunil" />
    </div>
    <div className={styles.receivedMsg}>
      <div className={styles.receivedWithMsg}>
        <p>{message.message}</p>
        <span className={styles.timeDate}>
          {message?.createdAt
            && `${new Date(message?.createdAt)?.toLocaleTimeString(LOCALE_DATE, {
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
            })} | ${new Date(message?.createdAt)?.toLocaleDateString(LOCALE_DATE, {
              month: 'long',
              day: 'numeric',
            })}`}
        </span>
      </div>
    </div>
  </div>
);
