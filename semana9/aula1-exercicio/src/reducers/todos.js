const initialState = {
    todosList: [
        {
            id: 1,
            text: 'Placeholder 1',
            completed: false
        },
        {
            id: 2,
            text: 'Placeholder 2',
            completed: true
        },
    ],

    filter: 'todas'
}

export const todos = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TASK":
            const newTodo = {
                id: Date.now(),
                text: action.payload.text,
                completed: false
            }
            return {
                ...state,
                todosList: [newTodo, ...state.todosList]
            }

        case "TOGGLE_TASK": {
            const newTodosList = state.todosList.map(todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })

            return {
                ...state,
                todosList: newTodosList
            }
        }

        case "DELETE_TASK": {
            const newTodosList = state.todosList.filter(todo => {
                if(todo.id === action.payload.id) {
                    return false
                }
                return true
            })
            
            return {
                ...state,
                todosList: newTodosList
            }
        }

        case "COMPLETE_ALL_TASKS": {
            const newTodosList = state.todosList.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })

            return {
                ...state,
                todosList: newTodosList
            }
        }

        case "DELETE_ALL_COMPLETE_TASKS": {
            const newTodosList = state.todosList.filter(todo => {
                if(todo.completed) {
                    return false
                }
                return true
            })
            
            return {
                ...state,
                todosList: newTodosList
            }
        }

        case "SET_FILTER": {
            return {
                ...state,
                filter: action.payload.filter
            }
        }
        
        default:
            return state
    }
}