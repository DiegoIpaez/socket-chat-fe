import { Row, Col, Button, Form, Input } from 'antd';
import styles from '../message.module.css';

export const SendMessage = () => (
  <Form className={styles.sendMsgContainer}>
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
