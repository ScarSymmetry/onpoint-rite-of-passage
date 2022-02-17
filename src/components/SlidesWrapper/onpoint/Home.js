import styles from './Home.module.css';
import home from '../../../assets/icons/home.png';
const Home = ({ goHome }) => {
  return (
    <div className={styles.home}>
      <div onClick={goHome} className={styles.iconWrapper}>
        <img className={styles.icon} src={home} alt='home' />
      </div>
      <span> PROJECT</span>
    </div>
  );
};

export default Home;
