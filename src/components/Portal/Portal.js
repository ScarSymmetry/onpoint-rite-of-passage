import styles from './Portal.module.css';
import { createPortal } from 'react-dom';

const rootModal = document.getElementById('modal');

const Portal = ({ children, isOpen = false }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className={styles.modalWrapper}>{children}</div>,
    rootModal
  );
};

export default Portal;
