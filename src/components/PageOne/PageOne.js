import styles from './PageOne.module.css';
import IMAGES from '../../assets/images/pageone';
const PageOne = () => {
  return (
    <div className={styles.grid}>
      <h3 className={styles.greeting}>привет,</h3>
      <section className={styles.textfield}>
        <p className={styles.textfield__paragraph}>
          Это <span>не</span> <br />
          коммерческое <br />
          задание
        </p>
      </section>

      <div className={styles.cta}>
        <button>Что дальше?</button>
      </div>

      <img
        className={styles.floatingHuge}
        src={IMAGES.floatingHuge}
        alt='bacteria'
      />

      <img
        className={styles.floatingBristle}
        src={IMAGES.floatingBristle}
        alt='bacteria'
      />
      <img
        className={styles.floatingSmall}
        src={IMAGES.floatingSmall}
        alt='bacteria'
      />
      <img
        className={styles.floatingSmall2}
        src={IMAGES.floatingSmall2}
        alt='bacteria'
      />
    </div>
  );
};

export default PageOne;
