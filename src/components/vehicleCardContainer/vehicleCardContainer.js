import { useRef, useState, useEffect } from 'react';
import styles from './vehicleCardContainer.module.css';

function VehicleCardContainer({ children, length, blanks }) {
	const container = useRef(null);
	const [containerLength, setContainerLength] = useState(null);
	const [cardWidth, setCardWidth] =useState(null);
	const [cardsPerPage, setCardsPerPage] = useState(3);
	const [page, setPage] = useState(1);
	const [numberOfPages, setNumberOfPages] = useState(0);
	const [scrolled, setScrolled] = useState(0);
	const cardGap = 20;
  const numberOfVehicles = length;
  // console.log(numberOfVehicles);

	useEffect(() => {
		setTimeout(() => {
			setContainerLength(container.current.scrollWidth);
			setCardWidth(container.current.firstChild.offsetWidth);
			setNumberOfPages(
				Math.ceil(container.current.scrollWidth / (container.current.firstChild.offsetWidth * cardsPerPage))
			);
			// setNumberOfPages(+length + +blanks);
		}, 200);		
	}, []);

	console.log(container);

  function scrollRight() {
		let scrollWidth = cardWidth * cardsPerPage + cardGap * cardsPerPage;
		
		if ( page >= 1 && page < numberOfPages ) {
			setPage(page + 1);
			let move = scrolled + scrollWidth;
			setScrolled(move);			
			container.current.scrollTo({
				top: 0,
				left: move,
				behavior: 'smooth',
			});
			// console.log(scrolled);
		}
  }
	function scrollLeft() {
		let scrollWidth = cardWidth * cardsPerPage + cardGap * cardsPerPage;
		if ( page !== 1 && page >= 2 ) {
			setPage(page - 1);
			let move = scrolled - scrollWidth;
			setScrolled(move);
			container.current.scrollTo({
				top: 0,
				left: move,
				behavior: 'smooth',
			});
			console.log(scrolled);
		}
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
