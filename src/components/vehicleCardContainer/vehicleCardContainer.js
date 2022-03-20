import styles from './vehicleCardContainer.module.css';

function VehicleCardContainer({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default VehicleCardContainer;