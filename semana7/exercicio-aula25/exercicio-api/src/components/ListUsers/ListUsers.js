import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import DeleteUser from '../DeleteUser/DeleteUser';

const ContainerListUsers = styled.div `
    display: flex;
    flex-direction: column;
    max-width: 25%;
    padding: 2.5rem;
    margin: 0 auto;
    border: 1px solid black;
`

const ContainerDosUsuarios = styled.li `
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgrey;
    padding: 5px;
`

class ListUsers extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            usuarios: [],
            errorMessage: undefined
        }
    }

    componentDidMount() {
        this.listAllUsers()
    }

    componentDidUpdate() {
        this.listAllUsers()
    }

    listAllUsers = () => {
        const request = axios.get('https://us-central1-future-apis.cloudfunctions.net/api/users/', {
            headers: {
                'Content-Type': 'application/json',
                'api-token': 'bruno-hamilton'
            }
        })

        request.then((response) => {
            const listaUsuarios = response.data.result;

            this.setState({
                usuarios: listaUsuarios
            })            

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
                    {this.state.usuarios.map((usuario) => {
                        return <ContainerDosUsuarios>
                                    {usuario.name}
                                    {<DeleteUser userId={usuario.id}/>}
                               </ContainerDosUsuarios>
                    })}
                </ul>
                <div>
                    {this.props.children}
                </div>
            </ContainerListUsers>            
        )
    }
}

export default ListUsers;