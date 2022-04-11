// import styles from './App.module.css';
import { useEffect, useState } from 'react';
import VehicleCardContainer from './components/vehicleCardContainer/vehicleCardContainer';
import VehicleCard from './components/vehicleCard/vehicleCard';
import BlankCard from './components/blankCard/BlankCard';
import smoothscroll from 'smoothscroll-polyfill';
import styles from './App.module.css';

smoothscroll.polyfill();

let test2;
const endpoint =
	'https://clients.contology.com/Client/CHTO-Chuck-Hutton-Toyota/07-Content/CHTO-9071/vehicles.json';

const getVehicles = async () => {
	const response = await fetch(endpoint);
	const jsonResponse = await response.json();
	// console.log(jsonResponse);
	return jsonResponse;
};

function divisible(num, length) {
	let dLength = length;
	while (dLength % num !== 0) {
		dLength++;
	}
	return dLength - length;
}

function makeArray(int) {
	let temp = [];
	for (let i = 1; i <= int; i++) {
		temp.push(i);
		console.log(i);
	}
	return temp;
}

function App() {
	const [vehicles, setVehicles] = useState([]);
	const [hybrids, setHybrids] = useState([]);
	const [gas, setGas]	= useState([]);
	const [cardsPerPage, setCardsPerPage] = useState(1);
	const [blanksArray, setBlanksArray] = useState([]);

	useEffect(() => {
		getVehicles().then((result) => {
			setVehicles(result.vehicles);
			test2 = divisible(cardsPerPage, result.vehicles.length);
			setBlanksArray(makeArray(test2));
			setHybrids(() => {
				return result.vehicles.filter(hyb => hyb['fuelType'] === 'hybrid');
			});
			setGas(() => {
				return result.vehicles.filter(gCar => gCar['fuelType'] === 'gas');
			});
		});
	}, [cardsPerPage]);


	return (
		<>
			<h2 className={styles.title}>Hybrids</h2>
			<VehicleCardContainer
				length={hybrids.length}
				blanks={test2}
				perPage={cardsPerPage}
			>
				{hybrids.map((vehicle) => (
					<VehicleCard
						key={vehicle.id}
						vehicle={vehicle}
						blankCards={divisible(cardsPerPage, hybrids.length)}
					/>
				))}
				{blanksArray.map((e, i) => (
					<BlankCard key={e} />
				))}
			</VehicleCardContainer>
			<div className={styles.spacer}></div>
			
			<h2 className={styles.title}>Gas</h2>
			<VehicleCardContainer
				length={gas.length}
				blanks={test2}
				perPage={cardsPerPage}
			>
				{gas.map((vehicle) => (
					<VehicleCard
						key={vehicle.id}
						vehicle={vehicle}
						blankCards={divisible(cardsPerPage, gas.length)}
					/>
				))}
				{blanksArray.map((e, i) => (
					<BlankCard key={e} />
				))}
			</VehicleCardContainer>
		</>
	);
}

export default App;
