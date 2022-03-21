import React, { useState } from 'react';
import styles from './cardImage.module.css';

export const CardImage = ({ exterior, interior, name }) => {
  const [show, setShow] = useState(false);
  function toggleShow() {
    setShow(!show);
  }
	return (
		<div className={styles.imgHolder} onClick={toggleShow}>
			<img
				src={exterior}
				className={`${styles.carExterior} ${show ? styles.hide : styles.show}`}
				alt={`${name} Exterior'`}
				draggable='false'
			/>
			<img
				src={interior}
				className={`${styles.carInterior} ${show ? styles.show : styles.hide}`}
				alt={`${name} Interior'`}
				draggable='false'
			/>
			<div className={styles.circleSelectors}>
				<div
					className={`${styles.circ} ${!show ? styles.circSelected : ''}`}
				></div>
				<div
					className={`${styles.circ} ${show ? styles.circSelected : ''}`}
				></div>
			</div>
		</div>
	);
};
