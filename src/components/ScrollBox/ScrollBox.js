import styles from './ScrollBox.module.css';
import { useState, useRef, useEffect } from 'react';

const ScrollBox = () => {
  const textRef = useRef(null);
  const [range, setRange] = useState(0);

  useEffect(() => {
    const scrollOffset = textRef.current.scrollHeight - textRef.current.clientHeight;
    const scrollPercentage = (scrollOffset / 100) * Number(range);
    console.log(scrollPercentage);
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
          step={1}
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
          doloribus quas iusto fuga quasi quae, nesciunt facilis nulla,
          dignissimos modi obcaecati voluptatum nostrum beatae quod pariatur
          dolor iste reprehenderit asperiores. Ab soluta rerum, earum ipsam
          exercitationem impedit consequuntur quam. Incidunt molestias nam eius
          in placeat repudiandae possimus minima nostrum quis ipsum ab
          voluptatibus, laboriosam assumenda, esse corrupti rem nobis earum
          vitae, sed facilis animi excepturi dignissimos? Dignissimos dolore
          veritatis laudantium, deleniti corporis deserunt, fugiat temporibus at
          facilis, id quod commodi. Ratione quos necessitatibus iure at fugit
          eaque ex corrupti, nihil mollitia impedit maiores, nulla perferendis
          quisquam ducimus distinctio a quas optio reprehenderit repellendus ad
          voluptates natus esse. Voluptatibus sint facere labore veniam velit
          debitis perspiciatis quis eligendi temporibus ratione illum laborum
          officiis ut, minima tempora blanditiis error delectus obcaecati fuga,
          explicabo ipsa, aliquid deleniti magni aperiam. Unde facilis fugit
          asperiores labore veniam consequatur? Earum dolor similique ipsam
          tempore molestias numquam illo, iure veritatis adipisci molestiae
          placeat quidem enim nisi, temporibus ad natus dolorum in quam eligendi
          eius tenetur ratione eaque maiores fuga. Molestiae nemo nobis possimus
          earum odit sequi ipsum repudiandae natus pariatur repellendus
          architecto dolorem, quos aut blanditiis dicta velit consequatur
          ratione facere doloribus laborum? Expedita odit dolore, doloremque
          sunt aut fugit voluptatum vero quis aliquam illo dolorum tempore
          maxime reprehenderit ipsum explicabo nostrum accusamus, perferendis
          quae error laborum tempora quia! Ullam quod, ex modi inventore vel
          pariatur dicta magnam quibusdam qui alias aspernatur adipisci corporis
        </p>
      </div>
    </section>
  );
};

export default ScrollBox;
