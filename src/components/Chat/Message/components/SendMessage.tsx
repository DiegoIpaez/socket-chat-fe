import { Row, Col, Button, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import styles from '../message.module.css';
import { AppStore } from '../../../../redux/store';
import { getLocalStorage } from '../../../../utils/localStorage.utility';

interface Props {
  sendPersonalMessage: (messageBody: {
    from: string;
    to: string;
    message: string;
  }) => void;
}

export const SendMessage = ({ sendPersonalMessage }: Props) => {
  const user = getLocalStorage('user');

  const [messageForm] = Form.useForm();
  const chatState = useSelector((store: AppStore) => store.chat);

  const onFinish = (formData: { message: string }) => {
    if (!formData?.message && !chatState.recipientId) return;
    const messageBody = {
      from: user.uid,
      message: formData.message,
      to: chatState.recipientId,
    };
    sendPersonalMessage(messageBody);
    messageForm.setFieldsValue({ message: '' });
  };

  return (
    <Form
      form={messageForm}
      onFinish={onFinish}
      className={styles.sendMsgContainer}
    >
      <Row className={styles.typeMsg} justify="space-between">
        <Col className={styles.inputMsgWrite} md={20} sm={18}>
          <Form.Item name="message">
            <Input type="text" placeholder="Mensaje..." />
          </Form.Item>
        </Col>
        <Col>
          <Button className={styles.msgSendBtn} htmlType="submit">
            enviar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
