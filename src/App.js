// import styles from './App.module.css';
import { useEffect, useState } from 'react';
import VehicleCardContainer from './components/vehicleCardContainer/vehicleCardContainer';
import VehicleCard from './components/vehicleCard/vehicleCard';

const endpoint =
	'https://clients.contology.com/Client/CHTO-Chuck-Hutton-Toyota/07-Content/CHTO-6999/vehicles.json';

const getVehicles = async () => {
	const response = await fetch(endpoint);
	const jsonResponse = await response.json();
	// console.log(jsonResponse);
	return jsonResponse;
};

function App() {
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		getVehicles().then((result) => setVehicles(result.vehicles));
	}, []);

	console.log(vehicles);

	return (
		<VehicleCardContainer>
			{vehicles.map((vehicle) => (
				<VehicleCard key={vehicle.id} vehicle={vehicle} />
			))}
		</VehicleCardContainer>
	);
}

export default App;
