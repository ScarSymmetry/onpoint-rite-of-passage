import styles from './CTAButton.module.css';
const CTAButton = ({ children, onClick, buttonType }) => {
  const circleType = buttonType === 'next' ? styles.ctaNext : styles.ctaPlus;

  return (
    <button
      className={`${styles.ctaButton} ${circleType}`}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default CTAButton;
