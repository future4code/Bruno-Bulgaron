import React, { Component } from 'react'

export default class NewTask extends Component {
    render() {
        return (
            <div>
                <h1>Planner</h1>
                
                <input placeholder="Digite a tarefa aqui"></input>
                
                <select>
                    <option value="segunda">Segunda-Feira</option>
                    <option value="terca">Terça-Feira</option>
                    <option value="quarta">Quarta-Feira</option>
                    <option value="quinta">Quinta-Feira</option>
                    <option value="sexta">Sexta-Feira</option>
                    <option value="sabado">Sábado</option>
                    <option value="domingo">Domingo</option>
                </select>
                
                <button>Criar</button>
            </div>
        )
    }
}
