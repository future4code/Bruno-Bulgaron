const initialState = {
    tasks: []
}

const task = (state = initialState, action) => {
    switch(action.type) {
        case "SET_TASKS": {
            return {
                ...state,
                tasks: action.payload.tasks
            }
        }
        default: {
            return state;
        }
    }
}

export default task;