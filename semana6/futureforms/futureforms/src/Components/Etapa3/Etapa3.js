import React from 'react';
import styled from 'styled-components';

const ContainerDadosGerais = styled.div `
    display: grid;
    max-width: 17%;
    margin: 0 auto;
    gap: 20px;
`

class Etapa3 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            blablabla: ""
        }
    }

    render() {
        return(
            <ContainerDadosGerais>
                <h1>Etapa 3 - Informações Gerais de Ensino</h1>

                <label>5. Por que você não terminou um curso de graduação?</label>
                <input type="text"></input>
                
                <label>6. Você fez algum curso complementar?</label>
                <select id="cursoComplementar">
                    <option value="nenhum">Nenhum</option>
                    <option value="cursoTecnico">Curso Técnico</option>
                    <option value="cursoIngles">Curso de Inglês</option>
                </select>
            </ContainerDadosGerais>
        )
    }

}

export default Etapa3