import styles from './vehicleCardContainer.module.css';

function vehicleCardContainer({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default vehicleCardContainer;