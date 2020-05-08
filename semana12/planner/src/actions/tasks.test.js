import axios from 'axios';
import { setTasks, getTasks, createTask } from './tasks';

describe("Testar actions task", () => {
    test("Busca uma task da API e armazena no Reducer", () => {
        // Preparação
        const mock = "Essa é uma tarefa"

        // Execução
        const action = setTasks(mock)

        // Verificação
        expect(action.type).toBe('SET_TASKS')
        expect(action.payload.tasks).toBe(mock)
    })

    test("Faz o dispatch na API e traz as tasks", async () => {
        
        
        // Mock do Axios
        const mock = [
            {
                text: "Blablabla",
                day: "segunda"
            }
        ]

        axios.get = jest.fn(async () => ({
            data: mock
        }))
        
        // Mock do Dispatch
        const dispatch = jest.fn()
        
        // Executa a ação assíncrona
        await getTasks()(dispatch)
        
        // Verifica se o Dispatch foi chamado com a ação correta
        expect(dispatch).toHaveBeenCalledWith({
            type: 'SET_TASKS',
            payload: {
                tasks: mock
            }
        })
    })

    test("Cria uma tarefa", async () => {
        
        // Mock do Axios
        const mockDoBody = {
            text: 'Comprar café',
            day: 'segunda'
        }

        axios.post = jest.fn()

        // Mock do Dispatch
        const dispatch = jest.fn()
        window.alert = jest.fn()

        // Executa a ação assíncrona
        await createTask(mockDoBody)(dispatch)

        // Verifica se o Dispatch foi chamado com a ação correta
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(axios.post).toHaveBeenCalledWith('https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bruno', mockDoBody)
        expect(alert).toHaveBeenCalledTimes(1)
    })
})