import ScrollBox from '../ScrollBox/ScrollBox';
import PAGE_TWO_IMAGES from '../../assets/images/pagetwo';
import styles from './PageTwo.module.css';
const PageTwo = () => {
  return (
    <div className={styles.grid}>
      <h3 className={styles.message}>Текст сообщения</h3>
      <section className={styles.boxContainer}>
        <ScrollBox />
      </section>

      <img
        className={styles.champion}
        src={PAGE_TWO_IMAGES.hugeChampion}
        alt='clint_eastwood'
      />
      <img
        className={styles.medium}
        src={PAGE_TWO_IMAGES.medium}
        alt='mediocre_guy'
      />
      <img
        className={styles.weakling}
        src={PAGE_TWO_IMAGES.weakling}
        alt='justin_bieber'
      />
      <img
        className={styles.medium2}
        src={PAGE_TWO_IMAGES.medium2}
        alt='mediocre_guy2'
      />
      <img
        className={styles.weakling2}
        src={PAGE_TWO_IMAGES.weakling2}
        alt='taylor_swift'
      />
    </div>
  );
};

export default PageTwo;
