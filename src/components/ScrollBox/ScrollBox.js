import styles from './ScrollBox.module.css';
import { useState, useRef, useEffect } from 'react';

const ScrollBox = () => {
  const textRef = useRef(null);
  const [range, setRange] = useState(0);

  useEffect(() => {
    console.log(textRef.current);
  }, []);

  return (
    <section className={styles.grid}>
      <div className={styles.rangeSlider}>
        <input
          className={styles.range}
          type='range'
          orient='vertical'
          min={0}
          max={100}
          value={range}
          onChange={(e) => setRange(e.target.value)}
        />
      </div>
      <div ref={textRef} className={styles.textWindow}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          eaque, consectetur aperiam ab officia quas ducimus quod magni earum id
          dignissimos rem libero sint voluptate culpa, nemo accusamus facilis
          quibusdam impedit optio. Laborum odio numquam vel tenetur eius facere
          libero eligendi molestias necessitatibus explicabo? Maxime voluptates
          expedita at nemo iste!
        </p>
      </div>
    </section>
  );
};

export default ScrollBox;
