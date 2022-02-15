import { useState } from 'react';
import styles from './Pagination.module.css';

const data = [
  { id: 1, name: 'cacharel amor amor' },
  { id: 2, name: 'sisley soir de lune' },
  { id: 3, name: 'bleu de chanel' },
  { id: 4, name: 'issey leau dissey' },
  { id: 5, name: 'kenneth cole blue' },
  { id: 6, name: 'lalique encre noire' },
];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = data.slice(firstItemIndex, lastItemIndex);

  const bulletAmount = data.length / itemsPerPage;

  const mappedBullets = Array.from({ length: bulletAmount }).map((_, i) => i);

  return (
    <section className={styles.container}>
      <div className={styles.display}>
        {currentItems.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.id}</h3>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>

      {/* bottom right left buttons and bullet points */}
      <div className={styles.controls}>
        <button className={styles.directionButton}>
          {' '}
          <span className={styles.left}></span>{' '}
        </button>
        <div className={styles.bulletBox}>
          {mappedBullets.map((_, index) => (
            <div key={index} className={styles.bullet}></div>
          ))}
        </div>
        <button className={styles.directionButton}>
          {' '}
          <span className={styles.right}></span>{' '}
        </button>
      </div>
    </section>
  );
};

export default Pagination;
