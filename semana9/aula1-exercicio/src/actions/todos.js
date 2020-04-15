// Todas essas actions irão mexer no estado global do Redux.

// Adicionar uma tarefa
export const addTask = (text) => {
    return {
        type: 'ADD_TASK',
        payload: {
            text: text
        }
    }
}

// Toggle tarefa
export const toggleTask = (id) => {
    return {
        type: 'TOGGLE_TASK',
        payload: {
            id: id
        }
    }
}

// Apagar uma tarefa
export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        payload: {
            id: id
        }
    }
}

// Marcar todas as tarefas como completas
export const completeAllTasks = () => {
    return {
        type: 'COMPLETE_ALL_TASKS'        
    }
}

// Remover as tarefas completas
export const deleteAllCompleteTasks = () => {
    return {
        type: 'DELETE_ALL_COMPLETE_TASKS'
    }
}

// Filtrar as tarefas
export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        payload: {
            filter: filter
        }
    }
}