import PAGE_TWO_IMAGES from '../../assets/images/pagetwo';
import styles from './PageTwo.module.css';
const PageTwo = () => {
  return (
    <div className={styles.grid}>
      <h3 className={styles.message}>Текст сообщения</h3>

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
    </div>
  );
};

export default PageTwo;
