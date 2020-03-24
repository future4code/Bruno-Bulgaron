import React from 'react';
import styled from 'styled-components';

const ContainerDadosGerais = styled.div `
    display: grid;
    max-width: 17%;
    margin: 0 auto;
    gap: 20px;
`

class Etapa4 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            blablabla: ""
        }
    }

    render() {
        return(
            <ContainerDadosGerais>
                <h1>O formulário acabou!</h1>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </ContainerDadosGerais>
        )
    }

}

export default Etapa4