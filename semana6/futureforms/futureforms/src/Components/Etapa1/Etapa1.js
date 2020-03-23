import React from 'react';
import { render } from '@testing-library/react';
import styled from 'styled-components';

const ContainerDadosGerais = styled.div `
    display: grid;
    max-width: 17%;
    margin: 0 auto;
    gap: 20px;
`

class DadosGerais extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
            pessoa: [
                {
                    nome: "",
                    idade: "",
                    email: "",
                    grauEscolaridade: [
                        "Ensino Médio Incompleto",
                        "Ensino Médio Completo",
                        "Ensino Superior Incompleto",
                        "Ensino Superior Completo"
                    ]
                }
            ]
        }
    }



    render() {
        return (
            <ContainerDadosGerais>
                <h1>Etapa 1 - Dados Gerais</h1>

                <label>1. Qual o seu nome?</label>
                <input type="text"></input>
                <label>2. Qual sua idade?</label>
                <input type="text"></input>
                <label>3. Qual o seu email?</label>
                <input type="email"></input>
                <label>4. Qual a sua escolaridade?</label>
                <select id="grauEscolaridade">
                    <option value="ensinoMedioInc">Ensino Médio Incompleto</option>
                    <option value="ensinoMedioComp">Ensino Médio Completo</option>
                    <option value="ensinoSuperiorInc">Ensino Superior Incompleto</option>
                    <option value="ensinoSuperiorcomp">Ensino Superior Completo</option>
                </select>
                
                <hr />
            </ContainerDadosGerais>
        )
    }


}

export default DadosGerais