import React, { useState } from 'react';
import styles from './vehicleCard.module.css';
import CardButton from '../cardButton/cardButton';

function VehicleCard(props) {
	const [imageToggle, setImageToggle] = useState(false);
	const vehicle = props.vehicle;

	function toggleImage() {
		setImageToggle(!imageToggle);
	}	

	// console.log(vehicle);
	return (
		<div className={styles.card}>
			<div className={styles.cardImages}>
				<div className={
					`${styles.imgContainer} ${imageToggle ? styles.toggleImage : ''}`
					} 
					onClick={toggleImage} >
					<img src={vehicle.exteriorImage} alt={vehicle.name} />
					<img src={vehicle.interiorImage} alt={vehicle.name + ' Interior'} />
				</div>
			</div>
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
