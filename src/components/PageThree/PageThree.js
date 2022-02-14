import THIRD_PAGE_IMGS from '../../assets/images/pagethree';
import CTAButton from '../CTAButton/CTAButton';
import styles from './PageThree.module.css';
const PageThree = () => {
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
          <CTAButton>Подробнее</CTAButton>
        </div>
      </section>

      <section className={styles.bottleAndBubbles}>
        <div className={styles.bottleContainer}>
          <img
            className={styles.bottle__img}
            src={THIRD_PAGE_IMGS.bottle}
            alt='spray bottle'
          />
          <img
            className={styles.redSmall}
            src={THIRD_PAGE_IMGS.redSmall}
            alt='bubble'
          />
          <img
            className={styles.blueSmall}
            src={THIRD_PAGE_IMGS.blueSmall}
            alt='bubble'
          />
          <img
            className={styles.blueBig}
            src={THIRD_PAGE_IMGS.blueBig}
            alt='bubble'
          />
          <img
            className={styles.pinkBig}
            src={THIRD_PAGE_IMGS.pinkBig}
            alt='bubble'
          />
          <img
            className={styles.tinyBlue}
            src={THIRD_PAGE_IMGS.tinyBlue}
            alt='bubble'
          />
          <img
            className={styles.darkerBlueBig}
            src={THIRD_PAGE_IMGS.darkerBlueBig}
            alt='bubble'
          />
          <img
            className={styles.pinkBigGlare}
            src={THIRD_PAGE_IMGS.pinkBigGlare}
            alt='bubble'
          />
          <img
            className={styles.blueBlurred}
            src={THIRD_PAGE_IMGS.blueBlurred}
            alt='bubble'
          />
        </div>
      </section>
    </div>
  );
};

export default PageThree;
