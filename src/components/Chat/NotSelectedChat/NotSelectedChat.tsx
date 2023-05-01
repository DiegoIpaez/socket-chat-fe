import styles from './notSelectedChat.module.css';

export const NotSelectedChat = () => (
  <div className={styles.middleScreen}>
    <div className="alert-info">
      <h3>Seleccione una persona</h3>
      <span>Para comenzar una conversación</span>
    </div>
  </div>
);
