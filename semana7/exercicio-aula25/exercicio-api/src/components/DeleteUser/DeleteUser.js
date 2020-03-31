import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerDeleteUser = styled.div `

`

const BotaoDeletar = styled.button `
    border: none;
    background-color: lightgray;
    color: darkred;

    :hover {
        cursor: pointer;
        color: red;
    }
`


class DeleteUser extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    deletarUsuario = () => {
        const request = axios.delete(`https://us-central1-future-apis.cloudfunctions.net/api/users/${this.props.userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'api-token': 'bruno-hamilton'
            }
        })

        request.then((response) => {
            window.alert("Usuário deletado!")
        }).catch((error) => {
            window.alert("Ocorreu um erro ao deletar o usuário.")
        })
    }

    render() {
        return (
            <ContainerDeleteUser>                
                <BotaoDeletar onClick={this.deletarUsuario}>X</BotaoDeletar>
            </ContainerDeleteUser>            
        )
    }
}

export default DeleteUser;