import { useState } from 'react';
import { Row, Col, Space, Button } from 'antd';
import styles from './navbar.module.css';
import { Login, Register } from '../Auth';

export const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const closeLoginModal = () => setOpenLogin(false);
  const closeRegisterModal = () => setOpenRegister(false);
  const openLoginFromRegister = () => {
    closeRegisterModal();
    setOpenLogin(true);
  };

  return (
    <>
      <Row justify="space-between" align="middle" className={styles.navbar}>
        <Col>
          <div className={styles.logoContainer}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
              alt="WhatsApp Logo"
              className={styles.logo}
            />
          </div>
        </Col>
        <Col>
          <Space size="large">
            <Button type="text" className={styles.link}>
              Centro de ayuda
            </Button>
            <Button
              type="text"
              onClick={() => setOpenRegister(true)}
              className={styles.link}
            >
              Registro
            </Button>
            <Button
              type="primary"
              onClick={() => setOpenLogin(true)}
              className={styles.chatLink}
            >
              Iniciar
            </Button>
          </Space>
        </Col>
      </Row>
      <Login closeModal={closeLoginModal} openModal={openLogin} />
      <Register
        goToLogin={openLoginFromRegister}
        closeModal={closeRegisterModal}
        openModal={openRegister}
      />
    </>
  );
};
