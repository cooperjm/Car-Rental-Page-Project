import React from 'react';
import styles from './vehicleCard.module.css';
import CardButton from '../cardButton/cardButton';
import { CardImage } from '../cardImage/cardImage';
import hybrid from '../../assets/images/271792_Hybrid_badge_with_connectors.png';
// import ev from '../../assets/images/toyota_ev.png';
import ev2 from '../../assets/images/toyota_ev (1).png';

function VehicleCard(props) {
	const vehicle = props.vehicle;
	
	return (
		<div
			className={`${styles.card} ${vehicle.fuelType === 'ev' ? styles.evBG : ''}${vehicle.fuelType === 'hybrid' ? styles.hybridBG : ''}`}
		>
			<CardImage
				exterior={vehicle.exteriorImage}
				interior={vehicle.interiorImage}
				name={vehicle.name}
			/>
			<div className={styles.info}>
				<div className={styles.infoCont}>
					<div>
						<p className={styles.year}>{vehicle.year}</p>
						<p className={styles.model}>{vehicle.name}</p>
					</div>
					{vehicle.fuelType === 'hybrid' && (
						<img src={hybrid} className={styles.evImage} alt='Hybrid Vehicle' draggable='false' />
					)}
					{vehicle.fuelType === 'ev' && (
						<img src={ev2} className={styles.evImage} alt='Electric Vehicle' draggable='false' />
					)}
				</div>
				<div className={styles.priceContainer}>
					<div className={styles.week}>
						<p>
							${vehicle.weekPrice}
							<br></br>
							<span className={styles.priceText}>a week</span>
						</p>
					</div>
					<div className={styles.day}>
						<p>
							${vehicle.dayPrice}
							<br></br>
							<span className={styles.priceText}>a day</span>
						</p>
					</div>
				</div>
				<div className={styles.infoList}>
					<ul>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
						<li>Lorem ipsum dolor sit.</li>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
							sint!
						</li>
					</ul>
				</div>
				<div>
					<CardButton href={vehicle.button1}>Reserve</CardButton>
					<CardButton href={vehicle.button2}>Contact Us</CardButton>
				</div>
			</div>
		</div>
	);
}

export default VehicleCard;
