import React from 'react';
import styled from 'styled-components';

const ContainerDadosGerais = styled.div `
    display: grid;
    max-width: 17%;
    margin: 0 auto;
    gap: 20px;
`
class Etapa2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            blablabla: ""
        }
    }

    render() {
        return(
            <ContainerDadosGerais>
                <h1>Etapa 2 - Informações do Ensino Superior</h1>

                <label>5. Qual curso?</label>
                <input type="text"></input>
                
                <label>6. Qual a unidade de ensino?</label>
                <input type="text"></input>
            </ContainerDadosGerais>
        )
    }

}

export default Etapa2