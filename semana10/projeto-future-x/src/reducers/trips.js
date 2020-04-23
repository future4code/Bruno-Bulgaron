const initialState = {
    allTrips: []
}

function trips(state = initialState, action) {
    switch(action.type) {
        case "SET_TRIPS": {
            return {
                ...state,
                allTrips: action.payload.trips
            }
        }
    }
    
    return state
}

export default trips