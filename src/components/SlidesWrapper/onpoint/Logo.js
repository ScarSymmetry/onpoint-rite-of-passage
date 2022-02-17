import styles from './Logo.module.css';
import onpoint from '../../../assets/icons/onpoint.png';

export const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <img src={onpoint} alt='onpoint logo' />
    </div>
  );
};
