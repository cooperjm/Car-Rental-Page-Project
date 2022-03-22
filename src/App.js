// import styles from './App.module.css';
import { useEffect, useState } from 'react';
import VehicleCardContainer from './components/vehicleCardContainer/vehicleCardContainer';
import VehicleCard from './components/vehicleCard/vehicleCard';
import BlankCard from './components/blankCard/BlankCard';

const endpoint =
	'https://clients.contology.com/Client/CHTO-Chuck-Hutton-Toyota/07-Content/CHTO-6999/vehicles.json';

const getVehicles = async () => {
	const response = await fetch(endpoint);
	const jsonResponse = await response.json();
	// console.log(jsonResponse);
	return jsonResponse;
};

function divisible(num, length) {
	let initialLength = length;
	while (initialLength % num !== 0) {
		initialLength++;
	}
	return initialLength - length;
}

console.log(divisible(3, 11));



function App() {
	const [vehicles, setVehicles] = useState([]);
	const [cardsPerPage, setCardsPerPage] = useState(3);
	const [blanksArray, setBlanksArray] = useState([]);

	useEffect(() => {
		getVehicles().then((result) => setVehicles(result.vehicles));
	}, []);	

	useEffect(() => {
		const blanks = divisible(cardsPerPage, vehicles.length);
		let temp = [];
		for (let i = 0; i < blanks; i++) {
			temp.push(i);
			console.log(i);
		}
		setBlanksArray(temp);
	}, []);
	
	

	console.log(blanksArray);

	return (
		<VehicleCardContainer length={vehicles.length}>
			{vehicles.map((vehicle) => (
				<VehicleCard
					key={vehicle.id}
					vehicle={vehicle}
					blankCards={divisible(cardsPerPage, vehicles.length)}
				/>
			))}
			{/* {[...Array(blanks)].map((e, i) => {
				<BlankCard key={i} e={e} />
			})} */}
		</VehicleCardContainer>
	);
}

export default App;
