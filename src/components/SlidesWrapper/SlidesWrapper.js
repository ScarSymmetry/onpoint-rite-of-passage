import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import { useState } from 'react';
import styles from './SlidesWrapper.module.css';

const SlidesWrapper = ({ openModal }) => {
  const [offset, setOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const TOUCH_THRESHOLD = 32;
  const SLIDE_WIDTH = 1024;

  const handleTouchStart = (e) => {
    const firstTouchX = e.changedTouches[0].clientX;
    const firstTouchY = e.changedTouches[0].clientY;
    setStartX(firstTouchX);
    setStartY(firstTouchY);
  };
  const handleTouchEnd = (e) => {
    const lastTouchX = e.changedTouches[0].clientX;
    const lastTouchY = e.changedTouches[0].clientY;
    let deltaX = lastTouchX - startX;
    let deltaY = lastTouchY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > TOUCH_THRESHOLD)
      onSwipeRight();
    if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < -TOUCH_THRESHOLD)
      onSwipeLeft();
  };

  const onSwipeLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - SLIDE_WIDTH;
      const maxOffset = -(SLIDE_WIDTH * 2);
      return Math.max(newOffset, maxOffset);
    });
  };

  const onSwipeRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + SLIDE_WIDTH;
      return Math.min(newOffset, 0);
    });
  };

  return (
    <div className={styles.container}>
      <div
        style={{ transform: `translateX(${offset}px)` }}
        className={styles.slider}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <PageOne toSecondPage={() => setOffset(-SLIDE_WIDTH)} />
        <PageTwo />
        <PageThree openModal={openModal} />
      </div>
    </div>
  );
};

export default SlidesWrapper;
