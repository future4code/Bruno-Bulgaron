import axios from 'axios';

// Esse é o cara do depósito, ele recebe todas as viagens e guarda elas.
export function setTrips(trips) {
    return {
        type: "SET_TRIPS",
        payload: {
            trips
        }
    }
}

// O cara do caminhão. Ele vai buscar as viagens e assim que elas chegam, ele chama o cara do depósito (setTrips).
export const fetchTrips = () => async(dispatch) => {
    const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/bruno-hamilton/trips')

    console.log(response.data.trips)
    dispatch(setTrips(response.data.trips))
}