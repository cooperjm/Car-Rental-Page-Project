import React from 'react';
import styles from './vehicleCard.module.css';
import CardButton from '../cardButton/cardButton';
import { CardImage } from '../cardImage/cardImage';

function VehicleCard(props) {
	const vehicle = props.vehicle;

	return (
		<div className={styles.card}>
			<CardImage
				exterior={vehicle.exteriorImage}
				interior={vehicle.interiorImage}
				name={vehicle.name}
			/>
			<div className={styles.info}>
				<p className={styles.year}>2022</p>
				<p className={styles.model}>{vehicle.name}</p>
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
