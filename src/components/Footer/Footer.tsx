import { GithubOutlined, CopyrightOutlined } from '@ant-design/icons';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <p className={styles.footerRow}>
            <span className={styles.icon}>
              <CopyrightOutlined />
            </span>
            SocketChat
          </p>
          <p className={styles.footerRow}>
            <a
              className={styles.linkAccount}
              href="https://github.com/DiegoIpaez?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.icon}>
                <GithubOutlined />
              </span>
              DiegoIpaez
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
