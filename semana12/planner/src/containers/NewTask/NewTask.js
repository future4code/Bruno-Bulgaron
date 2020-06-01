import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../actions/tasks'

class NewTask extends Component {
    constructor(props){
        super(props)

        this.state = {
            taskForm: {
                text: '',
                day: ''
            }
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({
            taskForm: {
                ...this.state.taskForm, [name]: value
            }
        })
    }
    
    handleCreateTask = (event) => {
        event.preventDefault()
        
        const { createTask } = this.props
        
        createTask(this.state.taskForm)
        
        this.setState({
            taskForm: {
                text: '',
                day: ''
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>Planner</h1>
                
                <input
                    placeholder="Digite a tarefa aqui"
                    name="text"
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.taskForm.text}
                ></input>
                
                <select
                    name="day"
                    onChange={this.handleInputChange}
                    value={this.state.taskForm.day}
                >
                    <option>Selecione o dia</option>
                    <option>Segunda-Feira</option>
                    <option>Terça-Feira</option>
                    <option>Quarta-Feira</option>
                    <option>Quinta-Feira</option>
                    <option>Sexta-Feira</option>
                    <option>Sábado</option>
                    <option>Domingo</option>
                </select>
                
                <button onClick={this.handleCreateTask}>Criar</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createTask: (body) => dispatch(createTask(body))
})

export default connect(null, mapDispatchToProps)(NewTask)