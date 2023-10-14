import { Row, Col } from 'antd';
import { Navbar } from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import homePanel from '@/assets/homePanel.jpg';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Row className={styles.rowContainer} justify="center" align="middle">
        <Col xs={24} sm={12} className={styles.leftSide}>
          <div className={styles.imgContainer}>
            <img src={homePanel} alt="home-panel" />
          </div>
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
      <Footer />
    </div>
  );
};

export default Home;
