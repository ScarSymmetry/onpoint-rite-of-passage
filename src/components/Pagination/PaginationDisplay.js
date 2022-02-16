import { useState } from 'react';
import PaginationControls from './PaginationControls';
import styles from './PaginationDisplay.module.css';

const data = [
  { id: 1, name: 'Benchmade Griptilian' },
  { id: 2, name: 'Sog Pentagon XR' },
  { id: 3, name: 'Buck NightHawk' },
  { id: 4, name: 'Microtech Combat Troodon' },
  { id: 5, name: 'Boker AF' },
  { id: 6, name: 'Benchmade Bugout' },
];

const PaginationDisplay = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = data.slice(firstItemIndex, lastItemIndex);

  const bulletAmount = Math.ceil(data.length / itemsPerPage);

  const mappedBullets = Array.from({ length: bulletAmount }).map(
    (_, index) => index
  ); //Dynamically changed bullet amount

  const padZero = (number) => {
    const paddedNumber = String(number).padStart(2, 0);
    return paddedNumber;
  };

  return (
    <section className={styles.container}>
      <div className={styles.display}>
        {currentItems.map((item) => {
          return (
            <div className={styles.product} key={item.id}>
              <h3>{padZero(item.id)}</h3>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>

      {/* bottom right left buttons and bullet points */}
      <PaginationControls
        bullets={mappedBullets}
        paginate={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};

export default PaginationDisplay;
