import React from 'react';
import styled from 'styled-components';

const ContainerInfoUser = styled.div `
    display: flex;
    flex-direction: column;
    max-width: 25%;
    padding: 2.5rem;
    margin: 0 auto;
    border: 1px solid black;
`

class InfoUser extends React.Component {
    constructor(props) {
        super(props)

    }

    alertar = () => {
        window.alert("Você clicou no usuário!")
    }

    render() {

        return(
            <ContainerInfoUser>
                <h1 onClick={this.alertar}>Teste</h1>
            </ContainerInfoUser>
        )
    }
}

export default InfoUser;