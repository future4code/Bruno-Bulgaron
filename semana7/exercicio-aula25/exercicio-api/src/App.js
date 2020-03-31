import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AddUser from './components/AddUser/AddUser';
import ListUsers from './components/ListUsers/ListUsers';

const MainContainer = styled.div `
  text-align: center;
`

const Botao = styled.button `
    color: black;
    font-size: 0.9rem;
    border: none;
    padding: 10px;
    margin-top: 10px;
    margin-right: 311px;

    :hover {
        cursor: pointer;
        background-color: lightblue;
        color: white;
    }
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      telaSelecionada: true
    }

  }

  mudaTela = () => {
    this.setState({
      telaSelecionada: !this.state.telaSelecionada
    })
  }
  
  render() {
    return (
      <div className="App">
        <MainContainer>
        
        {this.state.telaSelecionada ? 
          (
          <AddUser><Botao onClick={this.mudaTela}>Ver Usuários</Botao></AddUser> 
          )
           : 
          (
          <ListUsers><Botao onClick={this.mudaTela}>Cadastrar Usuário</Botao></ListUsers>
          )
        }

        </MainContainer>
      </div>
    );
  }
}

export default App;