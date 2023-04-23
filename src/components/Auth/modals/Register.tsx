import {
  Modal,
  Form,
  Button,
  Input,
  Row,
  Col,
  message,
  type FormInstance,
} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from '../auth.module.css';
import axios from '../../../utils/clientAxios.utility';
import { createUser } from '../../../redux/states/user';
import { setLocalStorage } from '../../../utils/localStorage.utility';
import { USUAL_MESSAGES } from '../../../utils/constants';

interface Props {
  openModal: boolean;
  closeModal: () => void;
}

export const Register = ({ closeModal, openModal }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const registerUser = async (formData: FormInstance) => {
    try {
      setLoading(true);
      const { data } = await axios.post('/auth/register', {
        ...formData,
      });
      const { createdAt, updatedAt, deleted, ...userLogged } = data.data.user;
      dispatch(createUser(userLogged));
      setLocalStorage('token', data.data.token);
      message.success(USUAL_MESSAGES.LOGIN_SUCCESS);
      navigate('/chat');
    } catch (error: Error | unknown) {
      message.warning(USUAL_MESSAGES.REGISTER_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      className="auth-modal"
      width={900}
      open={openModal}
      onCancel={closeModal}
      footer={false}
    >
      <Row gutter={100}>
        <Col xs={24} sm={12} className={styles.authImg}>
          <img
            src="https://blog.index.pe/wp-content/uploads/2020/03/chat-720x320@2x.jpeg"
            alt=""
          />
        </Col>
        <Col xs={24} sm={12} className={styles.authForm}>
          <h2>Unirse</h2>
          <Form onFinish={(e) => registerUser(e)}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: USUAL_MESSAGES.REQUIRED_FIELD }]}
            >
              <Input name="username" placeholder="Juan Perez" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ type: 'email', message: 'Ingrese un email valido' }]}
            >
              <Input name="email" placeholder="user@mail.com" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ min: 6, message: 'Debe ingresar mas 6 digitos o mas' }]}
            >
              <Input.Password
                placeholder="password"
                iconRender={
                  (visible: boolean) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)
                }
              />
            </Form.Item>
            <Row justify="center">
              <Button
                className={styles.button}
                htmlType="submit"
                loading={loading}
              >
                Crear cuenta
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
};
