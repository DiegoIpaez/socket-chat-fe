import { useState } from 'react';
import { Row, Col, Space, Button } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';
import { Login, Register } from '../Auth';
import { AppStore } from '../../redux/store';
import logo from '../../assets/logo.png';

const MAX_LENGTH_OF_USERNAME = 5;

export const Navbar = () => {
  const navigate = useNavigate();
  const chatState = useSelector((store: AppStore) => store.user);

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const getUserName = () => {
    const username = chatState?.username ?? '';
    if (username?.length > MAX_LENGTH_OF_USERNAME) {
      return `${username.substring(0, MAX_LENGTH_OF_USERNAME)}...`;
    }
    return username;
  };

  const closeLoginModal = () => setOpenLogin(false);
  const closeRegisterModal = () => setOpenRegister(false);
  const openLoginFromRegister = () => {
    closeRegisterModal();
    setOpenLogin(true);
  };

  const handleInitOnClick = () => (!chatState?.uid
    ? setOpenLogin(true)
    : navigate('/chat'));

  return (
    <>
      <Row justify="space-between" align="middle" className={styles.navbar}>
        <Col>
          <div className={styles.logoContainer}>
            <img
              src={logo}
              alt="nav-logo"
              className={styles.logo}
            />
          </div>
        </Col>
        <Col>
          <Space size="large">
            <Button
              type="text"
              onClick={() => setOpenRegister(true)}
              className={styles.link}
            >
              Registro
            </Button>
            <Button
              type="primary"
              onClick={() => handleInitOnClick()}
              className={styles.chatLink}
            >
              {!chatState?.uid ? 'Iniciar' : getUserName()}
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
