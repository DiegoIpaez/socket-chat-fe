import { Row, Col, Space, Button } from 'antd';
import styles from './navbar.module.css';

export const Navbar = () => (
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
        <Button type="text" className={styles.link}>
          Registro
        </Button>
        <Button type="primary" className={styles.chatLink}>
          Iniciar
        </Button>
      </Space>
    </Col>
  </Row>
);
