import { Spin } from 'antd';
import { Socket } from 'socket.io-client';
import { useEffect, useState, useRef } from 'react';
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
  const msgHistoryRef = useRef<HTMLDivElement>(null);
  const [personalMessages, setPersonalMessages] = useState<Array<IMessage>>([]);
  const [loadignMessage, setLoadignMessage] = useState(false);

  const scrollToButtom = (timeOut = 0) => {
    const element: HTMLDivElement | null = msgHistoryRef.current;
    setTimeout(() => {
      if (element) {
        element.scrollTo({
          top: element.scrollHeight,
          behavior: 'smooth',
        });
      }
    }, timeOut);
  };

  useEffect(() => {
    const getHistoricMsgs = async () => {
      try {
        setLoadignMessage(true);
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
      } finally {
        setLoadignMessage(false);
      }
    };
    if (recipientId) {
      getHistoricMsgs();
    }
  }, [recipientId, uid]);

  useEffect(() => {
    scrollToButtom();
  }, [personalMessages]);

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
      <Spin
        spinning={loadignMessage}
        tip="Cargando..."
        size="large"
        className={styles.loadMessages}
      />
      <div className={styles.msgHistory} ref={msgHistoryRef}>
        {personalMessages.length > 0
        && personalMessages.map(
          ({ _id: msgId, ...msg }) => (msg.to === uid ? (
            <IncomingMessage key={msgId} message={msg} />
          ) : (
            <OutgoingMessage key={msgId} message={msg} />
          )),
        )}
      </div>
      <SendMessage sendPersonalMessage={sendPersonalMessage} />
    </div>
  );
};
