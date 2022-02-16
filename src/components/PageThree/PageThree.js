import CTAButton from '../CTAButton/CTAButton';
import SprayBottle from '../SprayBottle/SprayBottle';
import styles from './PageThree.module.css';
const PageThree = ({ openModal }) => {
  return (
    <div className={styles.grid}>
      <section className={styles.keyMessage}>
        <h4 className={styles.heading}>Ключевое сообщение</h4>
        <h2 className={styles.brand}>
          BRAND <span>XY</span>
        </h2>
      </section>

      <section className={styles.details}>
        <div className={styles.noteTable}></div>
        <div className={styles.noteCalendar}></div>
        <div className={styles.ctaArea}>
          <CTAButton onClick={() => openModal(true)}>Подробнее</CTAButton>
        </div>
      </section>

      <section className={styles.bottleAndBubbles}>
        <SprayBottle />
      </section>
    </div>
  );
};

export default PageThree;
