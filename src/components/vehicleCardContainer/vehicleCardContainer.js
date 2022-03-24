import { useRef, useState, useEffect } from 'react';
import styles from './vehicleCardContainer.module.css';

function VehicleCardContainer({ children, length, blanks, perPage }) {
	const container = useRef(null);
	const [cardWidth, setCardWidth] =useState(null);
	const [page, setPage] = useState(1);
	const [numberOfPages, setNumberOfPages] = useState(0);
	const [scrolled, setScrolled] = useState(0);
	const cardGap = 20;
	// const testPages = ((length + blanks) / perPage);
	// console.log(testPages);
	let tStart = 0;
	let tEnd = 0;

	useEffect(() => {
		setTimeout(() => {
			// setContainerLength(container.current.scrollWidth);
			setCardWidth(container.current.firstChild.offsetWidth);
			setNumberOfPages((length + blanks) / perPage);
		}, 300);		
	}, [blanks, length, perPage]);
	

  function scrollRight() {
		let scrollWidth = cardWidth + cardGap;
		let adjustedPageNumber = numberOfPages;
		if (window.innerWidth >= 600) {
			adjustedPageNumber = numberOfPages - 2;
		}
		console.dir(window.innerWidth, adjustedPageNumber);
		if (page >= 1 && page < adjustedPageNumber) {
			setPage(page + 1);
			let move = scrolled + scrollWidth;
			setScrolled(move);
			container.current.scrollTo({
				top: 0,
				left: move,
				behavior: 'smooth',
			});
			// console.log('page number ' + page);
			// console.log('total pages ' + adjustedPageNumber);
		}
  }
	function scrollLeft() {
		let scrollWidth = cardWidth * perPage + cardGap * perPage;
		if ( page !== 1 && page >= 2 ) {
			setPage(page - 1);
			let move = scrolled - scrollWidth;
			setScrolled(move);
			container.current.scrollTo({
				top: 0,
				left: move,
				behavior: 'smooth',
			});
			// console.log(scrolled);
		}
	}

	function touchStart(e) {		
		tStart = e.changedTouches[0].clientX;
	}


	function touchEnd(e) {
		tEnd = e.changedTouches[0].clientX;

		if ( tEnd < tStart) {
			// console.log(`tEnd: ${tEnd} | tStart: ${tStart}`);
			// console.log(tStart - tEnd);
			if (tStart - tEnd > 50) {
				scrollRight();
			}			
		} else {
			if (tEnd - tStart > 50) {
				scrollLeft();
			}
			
		}
	}

	return (
		<section className={styles.sectionContainer}>
			<div className={styles.main} onTouchStart={touchStart} onTouchEnd={touchEnd} >
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
		</section>
	);
}


export default VehicleCardContainer;
