import SprayBottle from '../SprayBottle/SprayBottle';
import PaginationDisplay from '../Pagination/PaginationDisplay';
import styles from './Modal.module.css';

const Modal = ({ modalOpen, closeModal }) => {
  if (!modalOpen) return null;
  return (
    <section className={styles.overlay}>
      <div className={styles.popupBody}>
        <div className={styles.topArea}>
          <h5> преимущества</h5>
          <button onClick={() => closeModal(false)}>X</button>
        </div>

        <div className={styles.brand}>
          <h2>
            BRAND <span>XY</span>
          </h2>
        </div>
        <section className={styles.paginationContainer}>
          <PaginationDisplay />
        </section>
      </div>
      <div className={styles.bottleContainer}>
        <SprayBottle />
      </div>
    </section>
  );
};

export default Modal;
