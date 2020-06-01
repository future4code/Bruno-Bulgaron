import axios from 'axios';

export function setTasks(tasksFromApi){
    return {
        type: 'SET_TASKS',
        payload: {
            tasks: tasksFromApi
        }
    }
}

export const getTasks = () => async(dispatch) => {
    try {
        const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bruno')

        console.log(response.data)
        dispatch(setTasks(response.data))
    }catch(error) {
        alert("Erro ao buscar as tasks.")
    }
}

export const createTask = (body) => async(dispatch) => {
    try {
        await axios.post('https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bruno', body)

        alert("Tarefa criada com sucesso!")
        dispatch(getTasks())
    
    }catch(error){
        alert("Erro ao criar tarefa.")
    }
}