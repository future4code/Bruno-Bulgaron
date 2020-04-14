import todos from "../reducers/todos"

export const addTodoAction = valorInputTodo => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime(),
            texto: valorInputTodo,
            completo: false
        }
    }
}

export const removeTodoAction = id => {
    return {
        type: "REMOVE_TODO",
        payload: {
            id: id
        }
    }
}