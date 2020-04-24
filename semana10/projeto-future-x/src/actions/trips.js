import { push } from 'connected-react-router';
import { routes } from '../containers/Router';
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

export function setIds(id) {
    return {
        type: "SET_IDS",
        payload: {
            id
        }
    }
}

export function getTripDetailsSync(trips) {
    return {
        type: "GET_TRIP_DETAILS_SYNC",
        payload: {
            trips
        }
    }
}

// O cara do caminhão. Ele vai buscar as viagens e assim que elas chegam, ele chama o cara do depósito (setTrips).
export const fetchTrips = () => async(dispatch) => {
    const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/bruno-hamilton/trips')
    
    dispatch(setTrips(response.data.trips))
}

export const login = (email, password) => async(dispatch) => {
    const body = {
        email: email,
        password: password
    }

    try{
        const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureX/bruno-hamilton/login', body)

        localStorage.setItem("token", response.data.token)
    
        dispatch(push(routes.adminPanel))
    }catch(error){
        alert("Usuário e/ou senha inválido. Tente novamente.")
    }
}

export const createNewTrip = (body, token) => async(dispatch) => {
    try{
        await axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureX/bruno-hamilton/trips', body, {
            headers: {
                auth: token
            }
        })        
        alert("Viagem criada com sucesso!")
        dispatch(push(routes.tripsListAdmin))
    }catch(error){
        alert("Erro ao criar viagem.")
    }
}

// Pega os detalhes das viagens
export const getTripDetails = (id, token) => async(dispatch) => {
    const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/bruno-hamilton/trip/${id}`, {
        headers: {
            auth: token
        }
    })
    dispatch(getTripDetailsSync(response.data.trip))
    console.log(response.data.trip)
}