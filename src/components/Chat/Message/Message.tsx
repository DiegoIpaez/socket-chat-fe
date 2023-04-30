import { Socket } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { IncomingMessage, OutgoingMessage, SendMessage } from './components';
import styles from './message.module.css';
import { IMessage } from '../../../interfaces';
import axios from '../../../utils/clientAxios.utility';

interface Props {
  socket: React.MutableRefObject<Socket | null | undefined>;
  recipientId: string;
  uid: string;
}

export const Messages = ({ socket, recipientId, uid }: Props) => {
  const [personalMessages, setPersonalMessages] = useState<Array<IMessage>>([]);

  useEffect(() => {
    const getHistoricMsgs = async () => {
      try {
        setPersonalMessages([]);
        const { data } = await axios.get('/message/last-chat', {
          params: {
            from: uid,
            to: recipientId,
          },
        });
        setPersonalMessages(data.data.messages);
      } catch (error) {
        setPersonalMessages([]);
      }
    };
    if (recipientId) {
      getHistoricMsgs();
    }
  }, [recipientId, uid]);

  useEffect(() => {
    if (socket?.current) {
      socket?.current?.on('personal-message', (data: IMessage | object) => {
        setPersonalMessages((oldMsgs) => [...oldMsgs, data]);
      });
    }
  }, [socket]);

  const sendPersonalMessage = (messageBody: {
    from: string;
    to: string;
    message: string;
  }) => {
    if (socket?.current) {
      socket.current.emit('personal-message', messageBody);
    }
  };

  return (
    <div className={styles.msgContainer}>
      <div className={styles.msgHistory}>
        {personalMessages.map((msg) => (msg.to === uid ? (
          // eslint-disable-next-line no-underscore-dangle
          <IncomingMessage key={msg?._id} message={msg} />
        ) : (
          // eslint-disable-next-line no-underscore-dangle
          <OutgoingMessage key={msg?._id} message={msg} />
        )))}
      </div>
      <SendMessage sendPersonalMessage={sendPersonalMessage} />
    </div>
  );
};
