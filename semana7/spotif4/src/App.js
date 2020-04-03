import React from 'react';
import styled from 'styled-components';

import CriarPlaylist from './components/CriarPlaylist';
import ListarPlaylist from './components/ListarPlaylist';

class App extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        
        telaSelecionada: true      
      }
    }

    trocarTela = () => {
      this.setState({
        telaSelecionada: !this.state.telaSelecionada
      })
    }

    render() {
      return (
        <div>
          
          {this.state.telaSelecionada ? (
            <CriarPlaylist>
              <button onClick={this.trocarTela}>Ver Playlists</button>
            </CriarPlaylist>
          ) : (
            <ListarPlaylist>
              <button onClick={this.trocarTela}>Voltar</button>
            </ListarPlaylist>
          )}
        
        </div>
      )
    }
}

export default App;