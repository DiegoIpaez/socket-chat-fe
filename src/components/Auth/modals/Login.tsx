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

interface Props {
  openModal: boolean,
  closeModal: () => void,
}

export const Login = ({ closeModal, openModal }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const msg = 'Ocurrió un error al intentar iniciar sesión, correo y/o contraseña invalidos.';
  const [loading, setLoading] = useState(false);

  const loginUser = async (formData: FormInstance) => {
    try {
      setLoading(true);
      const { data } = await axios.post('/auth/login', {
        ...formData,
      });
      const { createdAt, updatedAt, deleted, ...userLogged } = data.data.user;
      dispatch(createUser(userLogged));
      setLocalStorage('token', data.data.token);
      navigate('/chat');
    } catch (error: Error | unknown) {
      message.warning(msg);
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
          <h2>Iniciar sesión</h2>
          <Form onFinish={(e) => loginUser(e)}>
            <Form.Item name="email">
              <Input name="email" placeholder="user@mail.com" />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                placeholder="password"
                iconRender={
                  (visible: boolean) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)
                }
              />
            </Form.Item>
            <p>¿Olvidaste tu contraseña?</p>
            <Row justify="center">
              <Button
                className={styles.button}
                htmlType="submit"
                loading={loading}
              >
                Ingresar a cuenta
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
};
