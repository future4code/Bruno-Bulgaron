import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const MainContainer = styled.div `
  max-width: 45%;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid black;
`

const HeaderStyle = styled.div `
  display: flex;
  justify-content: center;
  background-color: lightblue;
  margin: 0 auto;
`

const Botao = styled.button `
  color: black;
  background-color: lightskyblue;
  border: none;
  padding: 10px;
  width: 25%;
  margin-top: 10px;
  font-weight: bold;

  :hover {
    cursor: pointer;
    color: white;
  }
`

const ContainerDoCep = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ResultadoCEP = styled.div `
  border: 1px solid lightgreen;
  padding: 0 50px;
`

const ContainerDaLetra = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ResultadoLetra = styled.div `
  border: 1px solid lightgreen;
  padding: 0 50px;
  max-width: 100vw;
  max-height: 100vh;
`


class App extends React.Component {
  constructor(props) {
    super(props)    
    
    this.state = {
      inputValueCep: '',
      detalhesCep: undefined,
      
      inputValueArtista: '',
      detalhesLetra: undefined
    }
  }

  componentDidMount() {
    this.obterCep()
    this.obterLetra()
  }

  onChangeInputCep = (event) => {
    this.setState({
      inputValueCep: event.target.value
    })
  }

  obterCep = () => {
    Axios.get(`https://viacep.com.br/ws/${this.state.inputValueCep}/json/`)
    .then((response) => {
      this.setState({
        detalhesCep: response.data
      })
    })
  }
    
  onChangeInputArtista = (event) => {
    this.setState({
      inputValueArtista: event.target.value
    })
  }

  onChangeInputMusica = (event) => {
    this.setState({
      inputValueMusica: event.target.value
    })
  }

  obterLetra = () => {
    Axios.get(`https://api.lyrics.ovh/v1/${this.state.inputValueArtista}/${this.state.inputValueMusica}`)
    .then((response) => {
      this.setState({
        detalhesLetra: response.data
      })
    })
  }
  
  render() {
    return (
      <MainContainer>
        <HeaderStyle>
          <h2>Tarefas Aleatórias</h2>          
        </HeaderStyle>

        <ContainerDoCep>
          <label>Digite o CEP: </label>
          <input value={this.state.inputValueCep} onChange={this.onChangeInputCep} max={8} maxlength={8}/>
          <Botao onClick={this.obterCep}>Obter Informações</Botao>
          {this.state.detalhesCep && (
            <ResultadoCEP>
              <p>
                <strong>Cidade: </strong>
                {this.state.detalhesCep.localidade}
              </p>              
              <p>
                <strong>Estado: </strong>
                {this.state.detalhesCep.uf}
              </p>
              <p>
                <strong>CEP: </strong>
                {this.state.detalhesCep.cep}
              </p>
            </ResultadoCEP>
          )}
        </ContainerDoCep>

        <ContainerDaLetra>
          <label>Digite o Artista: </label>
          <input value={this.state.inputValueArtista} onChange={this.onChangeInputArtista} />
          
          <label>Digite a Música: </label>
          <input value={this.state.inputValueMusica} onChange={this.onChangeInputMusica} />
          <Botao onClick={this.obterLetra}>Obter Letras</Botao>
          {this.state.detalhesLetra && (
            <ResultadoLetra>              
              <strong>Letra: </strong>
              <p>{this.state.detalhesLetra.lyrics}</p>
            </ResultadoLetra>
          )}
        </ContainerDaLetra>

        

      </MainContainer>
    );
  }  
}

export default App;