import React from 'react';
import { Container, Title, Input, ListItem, BtnDel, BtnAdd } from './styles';

class App extends React.Component {
  constructor(props) {
    super(props)
	
  }
  
  render() {
    return (
      <Container>
        <Title>To-Do App</Title>      
        <form>
          <Input 
            type="text"
            placeholder="O que tem que ser feito?"
          >
          </Input>
          <BtnAdd>Adicionar</BtnAdd>
        </form>
        <ul>
          
        </ul>
      </Container>
    );
  }  
}

export default App;

/*
Actions que iremos precisar
- Adicionar Todo                                  (ADD_TODO)
- Remover Todo                                    (REMOVE_TODO)
- Marcar Todo como completo                       (COMPLET_TODO)
- Desmarcar Todo como completo                    (INCOMPLET_TODO)
- Marcar todos os Todo como completos             (ALL_TODOS_COMPLETE)
- Remover todos os Todo marcados como completos   (ALL_TODOS_INCOMPLETE)
Action-Creators para os Actions acima
function addTodo(valorInputTodo) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: id,
      valorInputTodo: valorInputTodo,
      completo: false
    }
  }
}
function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    payload: {
      id: id
    }
  }
}
function completTodo(id) {
  return {
    type: 'COMPLET_TODO',
    payload: {
      id: id,
      completo: true
    }
  }
}
function incompletTodo(id) {
  return {
    type: 'INCOMPLET_TODO',
    payload: {
      id: id,
      completo: false
    }
  }
}
function allTodosComplete(arrayQueContemTodos) {
  return {
    type: 'ALL_TODOS_COMPLETE',
    payload: {
      completo: true
    }
  }
}
function allTodosIncomplete(arrayQueContemTodos) {
  return {
    type: 'ALL_TODOS_INCOMPLETE',
    payload: {
      completo: false
    }
  }
}
*/