import { Spin } from 'antd';
import styles from './loading.module.css';

const Loading = () => (
  <div className={styles.loadingContainer}>
    <Spin tip="Cargando..." size="large" />
  </div>
);

export default Loading;
