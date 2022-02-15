import Portal from '../Portal/Portal';
import styles from './Modal.module.css';

const Modal = ({ modalOpen }) => {
  return (
    <Portal isOpen={modalOpen}>
      <div className={styles.popupBody}>
        <div className={styles.topArea}>
          <h5> преимущества</h5>
          <button>X</button>
        </div>

        <div className={styles.brand}>
          <h2>
            BRAND <span>XY</span>
          </h2>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
