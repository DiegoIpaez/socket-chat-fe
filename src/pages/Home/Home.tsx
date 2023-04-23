import { Row, Col } from 'antd';
import { Navbar } from './Navbar/Navbar';
import styles from './home.module.css';

const Home = () => {
  const hi = 'hello word';
  return (
    <>
      <Navbar />
      <Row justify="center" align="middle">
        <Col xs={24} sm={12} className={styles.leftSide}>
          <img
            src="https://blog.index.pe/wp-content/uploads/2020/03/chat-720x320@2x.jpeg"
            alt=""
          />
        </Col>
        <Col xs={24} sm={12} className={styles.rightSide}>
          <h2>Exprésate</h2>
          <h3>con libertad</h3>
          <p>
            Te animamos a hablar con tus contactos sin miedo ni limitaciones. No
            dudes en expresar tus opiniones sin prejuicio alguno.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Home;
