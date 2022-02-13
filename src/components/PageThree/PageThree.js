import THIRD_PAGE_IMGS from '../../assets/images/pagethree';
import styles from './PageThree.module.css';
const PageThree = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.bottleAndBubbles}>
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
        </div>
      </div>
    </div>
  );
};

export default PageThree;
