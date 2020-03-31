import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerListUsers = styled.div `
    display: flex;
    flex-direction: column;
    max-width: 25%;
    padding: 2.5rem;
    margin: 0 auto;
    border: 1px solid black;
`

const Botao = styled.button `
    color: black;
    font-size: 1.1em;
    border: none;
    padding: 10px;
    margin-top: 20px;

    :hover {
        cursor: pointer;
        background-color: lightblue;
        color: white;
    }
`

class ListUsers extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: undefined,
            errorMessage: undefined
        }
    }

    componentDidMount() {
        this.listAllUsers()
    }

    listAllUsers = (id) => {
        const request = axios.get(`https://us-central1-future-apis.cloudfunctions.net/api/users/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'api-token': 'bruno-hamilton'
            }
        })

        request.then((response) => {
            this.setState({
                data: response.data
            })

            console.log(response.data)

        }).catch((error) => {
            this.setState({
                errorMessage: 'Ocorreu um erro'
            })
        })
    }

    render() {
        return (
            <ContainerListUsers>                
                <h3>Usuários Cadastrados</h3>
                <ul>
                    <li>Placeholder</li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </ContainerListUsers>            
        )
    }
}

export default ListUsers;