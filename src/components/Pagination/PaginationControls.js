import styles from './PaginationControls.module.css';
const PaginationControls = ({ bullets, paginate, currentPage }) => {
  const previousPage = () => {
    paginate((current) => {
      const newPage = current - 1;
      return Math.max(newPage, 1);
    });
  };

  const nextPage = () => {
    paginate((current) => {
      const newPage = current + 1;
      console.log(newPage, bullets.length);
      return Math.min(newPage, bullets.length);
    });
  };

  return (
    <div className={styles.controls}>
      <button onClick={previousPage} className={styles.directionButton}>
        {' '}
        <span className={styles.left}></span>{' '}
      </button>
      <div className={styles.bulletBox}>
        {bullets?.map((_, index) => (
          <div
            key={index}
            className={`${
              currentPage === index + 1 ? styles.activeBullet : styles.bullet
            }`}
          ></div>
        ))}
      </div>
      <button onClick={nextPage} className={styles.directionButton}>
        {' '}
        <span className={styles.right}></span>{' '}
      </button>
    </div>
  );
};

export default PaginationControls;
