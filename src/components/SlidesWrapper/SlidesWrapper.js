import { useRef, useState, useEffect } from 'react';
import styles from './SlidesWrapper.module.css';
const SlidesWrapper = ({ children }) => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [slidesWidth, setSlidesWidth] = useState(null);

  useEffect(() => {
    //getting the width of slides
    const containerWidth =
      containerRef.current.scrollWidth - containerRef.current.offsetWidth;
    setSlidesWidth(containerWidth);
  }, []);

  const handleTouchStart = (e) => {
    const firstTouchX = e.changedTouches[0].clientX;
    const firstTouchY = e.changedTouches[0].clientY;
    setStartX(firstTouchX);
    setStartY(firstTouchY);
    console.log(firstTouchX, firstTouchY);
  };
  const handleTouchEnd = (e) => {
    const lastTouchX = e.changedTouches[0].clientX;
    const lastTouchY = e.changedTouches[0].clientY;
    let deltaX = lastTouchX - startX;
    let deltaY = lastTouchY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 32) onSwipeRight();
    if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < -32) onSwipeLeft();
  };

  const onSwipeLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 1024;
      const maxOffset = -slidesWidth;
      return Math.max(newOffset, maxOffset);
    });
  };

  const onSwipeRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 1024;
      return Math.min(newOffset, 0);
    });
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <div
        ref={sliderRef}
        style={{ transform: `translateX(${offset}px)` }}
        className={styles.slider}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
    </div>
  );
};

export default SlidesWrapper;
