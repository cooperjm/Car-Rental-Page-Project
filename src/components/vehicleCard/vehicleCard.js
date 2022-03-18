import styles from './vehicleCard.module.css';

function vehicleCard(props) {
  const vehicle = props.vehicle;
  console.log(vehicle);
	return (
		<div className={styles.card}>
			<div className={styles.cardImages}>
				<div className={styles.imgContainer}>
					<img src={vehicle.exteriorImage} alt='' />
					<img src={vehicle.interiorImage} alt='' />
				</div>
			</div>
		</div>
	);
}

export default vehicleCard;
