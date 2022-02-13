import styles from './ScrollBox.module.css';
import { useState, useRef, useEffect } from 'react';

const ScrollBox = () => {
  const textRef = useRef(null);
  const [range, setRange] = useState(0);

  useEffect(() => {
    const scrollOffset =
      textRef.current.scrollHeight - textRef.current.clientHeight;
    const scrollPercentage = (scrollOffset / 100) * Number(range);
    textRef.current.scrollTop = scrollPercentage;
  }, [range]);

  const onScrollChange = (e) => {
    setRange(e.target.value);
  };

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
          onChange={onScrollChange}
        />
      </div>
      <div ref={textRef} className={styles.textWindow}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          eaque, consectetur aperiam ab officia quas ducimus quod magni earum id
          dignissimos rem libero sint voluptate culpa, nemo accusamus facilis
          quibusdam impedit optio. Laborum odio numquam vel tenetur eius facere
          libero eligendi molestias necessitatibus explicabo? Maxime voluptates
          expedita at nemo iste! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Quo, provident corrupti, facere quasi sint
          consequatur, saepe beatae temporibus error dolores qui sapiente. Ipsa
          quia, commodi culpa mollitia non voluptas maxime corporis minima
          vitae, vero ratione? Consequuntur distinctio numquam, id eos nemo,
          asperiores ducimus repellendus quasi ut dolore ratione, eaque veniam
          natus? Illum dicta earum obcaecati, doloribus voluptatem quo? Eaque
          iure eveniet totam at ad illum recusandae sint doloribus aut unde?
          Doloribus aliquam necessitatibus provident fuga, possimus, ducimus
          nostrum aperiam distinctio sapiente autem nihil quas magni ea? Ipsa,
          fugiat sunt? Ipsam veniam incidunt consequatur reiciendis odit sequi
          nobis ipsa nemo dicta! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Ipsam magni laborum molestiae at, excepturi
          voluptates recusandae doloribus debitis maiores optio maxime non
          ullam, veniam quisquam ad hic animi minus, necessitatibus doloremque
          et esse eius. Repellat veritatis doloribus numquam commodi deserunt,
          harum, quidem pariatur ea quos omnis suscipit id perspiciatis autem
          repellendus odit rerum debitis totam quibusdam, soluta ipsam. Quae
          voluptate provident eligendi iure reprehenderit repellat, in ipsa. Nam
          libero eligendi cupiditate necessitatibus, facere blanditiis
          voluptates quo exercitationem adipisci tempore temporibus? Explicabo,
          corrupti, similique voluptatem eos veritatis mollitia assumenda eius
          vero fuga voluptatum velit esse dolores officia dolor iure vitae
          architecto molestias! Earum dolorem qui tempore excepturi provident,
          corporis non hic alias suscipit est a totam eius. Saepe dolores
          molestiae voluptatum voluptatibus quos quae iusto alias. Debitis,
        </p>
      </div>
    </section>
  );
};

export default ScrollBox;
