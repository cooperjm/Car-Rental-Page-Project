import React from 'react';
import styles from './vehicleCard.module.css';
import CardButton from '../cardButton/cardButton';
import { CardImage } from '../cardImage/cardImage';
// import hybrid from '../../assets/images/271792_Hybrid_badge_with_connectors.png';
// import ev from '../../assets/images/toyota_ev.png';
// import ev2 from '../../assets/images/toyota_ev (1).png';

function VehicleCard(props) {
	const vehicle = props.vehicle;
	const evImage = 'https://clients.contology.com/Client/CHTO-Chuck-Hutton-Toyota/07-Content/CHTO-6999/ev.png';
	const hybridImage =
		'https://clients.contology.com/Client/CHTO-Chuck-Hutton-Toyota/07-Content/CHTO-6999/hybrid.png';
	
	return (
		<div
			className={`${styles.card} ${
				vehicle.fuelType === 'ev' ? styles.evBG : ''
			}${vehicle.fuelType === 'hybrid' ? styles.hybridBG : ''}`}
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
						<img
							src={hybridImage}
							className={styles.evImage}
							alt='Hybrid Vehicle'
							draggable='false'
						/>
					)}
					{vehicle.fuelType === 'ev' && (
						<img
							src={evImage}
							className={styles.evImage}
							alt='Electric Vehicle'
							draggable='false'
						/>
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
						<li dangerouslySetInnerHTML={{__html: vehicle.info1}}></li>
						<li dangerouslySetInnerHTML={{__html: vehicle.info2}}></li>
						<li dangerouslySetInnerHTML={{__html: vehicle.info3}}></li>
					</ul>
				</div>
				<div>
					{/* <CardButton href={vehicle.button1}>Reserve Now</CardButton> */}
					<CardButton href={vehicle.button2}>Request This Car</CardButton>
				</div>
			</div>
		</div>
	);
}

export default VehicleCard;
