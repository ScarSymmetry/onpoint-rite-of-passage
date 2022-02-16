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
      </div>
    </section>
  );
};

export default Modal;
