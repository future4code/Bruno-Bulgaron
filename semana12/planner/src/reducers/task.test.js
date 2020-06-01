import { setTasks } from '../actions/tasks';
import task from './task';

describe("Teste Reducer das tasks", () => {
    test("Teste setTasks", () => {
        // Preparação
        const mockDoState = {
            tasks: []
        }

        const mockDeUmaTask = [{
            text: "Tarefa",
            day: "segunda"
        }]

        const mockDaAction = setTasks(mockDeUmaTask)
        
        // Execução
        const novoState = task(mockDoState, mockDaAction)
        
        // Verificação
        expect(novoState.tasks).toHaveLength(1)
        expect(novoState.tasks[0].text).toBe(mockDeUmaTask[0].text)
        expect(novoState.tasks[0].day).toBe(mockDeUmaTask[0].day)
    })

    test("Teste case default", () => {
        // Preparação
        const mockDoState = [{
            text: "Tarefa",
            day: "segunda"
        }]

        const mockInvalido = {
            type: "INVALID_TYPE"
        }
        
        // Execução
        const novoState = task(mockDoState, mockInvalido)
        
        // Verificação
        expect(novoState).toEqual(mockDoState)

    })
})