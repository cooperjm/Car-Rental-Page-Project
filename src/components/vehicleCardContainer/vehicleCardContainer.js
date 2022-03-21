import { useRef, useState, useEffect } from 'react';
import styles from './vehicleCardContainer.module.css';

function VehicleCardContainer({ children, length }) {
	const container = useRef(null);
	const [containerLength, setContainerLength] = useState(null);
	// const [scroll, setScroll] = useState(null);
  const numberOfVehicles = length;
  console.log(numberOfVehicles);

	useEffect(() => {
		setContainerLength(container.current.scrollWidth);
	}, []);

  function scrollRight() {
    console.dir(container.current);
		console.log(containerLength);
    container.current.scrollTo(
			{ top: 0, left: container.current.offsetWidth, behavior: 'smooth'}
		);
  }
	function scrollLeft() {
		container.current.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}

	return (
		<div className={styles.main}>
			<div className={styles.container} ref={container}>
				{children}
			</div>
			<div className={styles.navContainer}>
				<div className={styles.chevron} onClick={scrollLeft}>
					<i className={styles['gg-chevron-left']}></i>
				</div>
				<div className={styles.chevron} onClick={scrollRight}>
					<i className={styles['gg-chevron-right']}></i>
				</div>
			</div>
		</div>
	);
}

export default VehicleCardContainer;
