const initialState = {
    allTrips: [],
    tripDetails: [],
    tripId: ''
}

function trips(state = initialState, action) {
    switch(action.type) {
        case "SET_TRIPS": {
            return {
                ...state,
                allTrips: action.payload.trips
            }
        }
        case "SET_IDS": {
            return {
                ...state,
                tripId: action.payload.id
            }
        }
        case "GET_TRIP_DETAILS_SYNC": {
            return {
                ...state,
                tripDetails: action.payload.trips
            }
        }
    }
    
    return state
}

export default trips