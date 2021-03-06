import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tarefas: [
        {
          id: Date.now(),
          texto: "",
          completa: false
        }
      ],
      inputValue: '',
      filter: ''
    }
  }

  componentDidUpdate() {
    console.log("Update!")
    const dadoASerSalvo = {
      id: this.state.id,
      texto: this.state.texto,
      completa: this.state.completa,
    }

    const objetoString = JSON.stringify(dadoASerSalvo)

    localStorage.setItem("camposInput", objetoString)

  };

  componentDidMount() {
    console.log("Mount!")

    const dadosTarefa = localStorage.getItem("camposInput")
    if(dadosTarefa !== null) {
      const dadosObjeto = JSON.parse(dadosTarefa)

      this.setState({
        id: dadosObjeto.id,
        texto: dadosObjeto.texto,
        completa: dadosObjeto.completa,
      })
    }
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaListaDeTarefas = [novaTarefa, ...this.state.tarefas]

    this.setState({
      tarefas: novaListaDeTarefas,
      inputValue: ""
    })
  }

  selectTarefa = (id) => {
    const auxiliar = this.state.tarefas.map(tarefa => {
      if(tarefa.id === id){
        tarefa.completa = !tarefa.completa
      }
      return tarefa
    })

    this.setState({tarefas: auxiliar})
  }

  onChangeFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App