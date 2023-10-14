import styles from '../message.module.css';
import { IMessage } from '../../../../interfaces';
import { LOCALE_DATE } from '../../../../utils/constants';

interface Props {
  message: IMessage;
}

export const OutgoingMessage = ({ message }: Props) => {
  return (
    <div className={styles.outgoingMsg}>
      <div className={styles.sendMsg}>
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
  );
};
