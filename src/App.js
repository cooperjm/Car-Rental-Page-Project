// import styles from './App.module.css';
import { useEffect, useState } from 'react';
import VehicleCardContainer from './components/vehicleCardContainer/vehicleCardContainer';
import VehicleCard from './components/vehicleCard/vehicleCard';
import BlankCard from './components/blankCard/BlankCard';
import smoothscroll from 'smoothscroll-polyfill';

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
	const [cardsPerPage, setCardsPerPage] = useState(1);
	const [blanksArray, setBlanksArray] = useState([]);
	
	useEffect(() => {
		getVehicles().then((result) => {
			setVehicles(result.vehicles);
			test2 = divisible(cardsPerPage, result.vehicles.length);
			setBlanksArray(makeArray(test2));
		});
	}, [cardsPerPage]);	

	return (
		<VehicleCardContainer length={vehicles.length} blanks={test2} perPage={cardsPerPage}>
			{vehicles.map((vehicle) => (
				<VehicleCard
					key={vehicle.id}
					vehicle={vehicle}
					blankCards={divisible(cardsPerPage, vehicles.length)}
				/>
			))}
			{blanksArray.map((e, i) => (
				<BlankCard key={e} />
			))}
		</VehicleCardContainer>
	);
}

export default App;
