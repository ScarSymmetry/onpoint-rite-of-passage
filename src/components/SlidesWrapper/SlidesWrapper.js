import styles from './SlidesWrapper.module.css';
const SlidesWrapper = ({ children }) => {
  return (
    <div className={styles.container}>
          <div className={styles.slider}>
              {children}
          </div>
    </div>
  );
};

export default SlidesWrapper;
