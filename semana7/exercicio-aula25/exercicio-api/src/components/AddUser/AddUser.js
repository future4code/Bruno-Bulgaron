import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerAddUser = styled.div `
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

class AddUser extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputNomeValue: '',
            inputEmailValue: ''
        }
    }

    onChangeInputNomeValue = (event) => {
        this.setState({
            inputNomeValue: event.target.value
        })
    }

    onChangeInputEmailValue = (event) => {
        this.setState({
            inputEmailValue: event.target.value
        })
    }

    mudaTelaPraListaUsuarios = () => {

    }
    
    adicionaUser = () => {
        const userToAdd = {
            name: this.state.inputNomeValue,
            email: this.state.inputEmailValue
        }

        const request = axios.post('https://us-central1-future-apis.cloudfunctions.net/api/users', userToAdd, {
            headers: {
                'Content-Type': 'application/json',
                'api-token': 'bruno-hamilton'
            }
        })

        request.then((response) => {
            window.alert("Usuário adicionado com sucesso!")
        }).catch((error) => {
            window.alert("Houve um erro na hora de adicionar o usuário.")
        })
    }

    render() {
        return (
            <ContainerAddUser>
                <label>Nome: </label>                
                <input 
                    type="text"
                    onChange={this.onChangeInputNomeValue}
                ></input>
                <label>E-mail: </label>
                <input 
                    type="text"
                    onChange={this.onChangeInputEmailValue}
                ></input>
                <Botao
                    onClick={this.adicionaUser}>Salvar
                </Botao>

                <div>
                    {this.props.children}
                </div>
                                                
            </ContainerAddUser>
        )
    }
}

export default AddUser;