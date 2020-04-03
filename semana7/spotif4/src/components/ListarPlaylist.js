import React from 'react';
import axios from 'axios'

import AdicionarMusica from '../components/AdicionarMusica';

class ListarPlaylist extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playlists: [],
            addMusica: '',
            idMusica: '' 
        }
    }

    componentDidMount() {
        this.buscaPlaylists()
    }

    buscaPlaylists = () => {
        axios.get('https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists', {
            headers: {
                'Content-Type': 'application/json',
                'auth': 'bruno-hamilton'
            }
        }).then((response) => {
            this.setState({
                playlists: response.data.result.list
            })
        }).catch((error) => {
            alert("Erro ao carregar playlists.")
        })
    }

    deletarPlaylist = (id, name) => {
        axios.delete(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'auth': 'bruno-hamilton'
            }
        }).then((response) => {
            alert("A playlist " + name + " foi deletada com sucesso!")
            this.componentDidMount()
        }).catch((error) => {
            alert("Ocorreu um erro ao deletar a playlist.")
        })
    }

    onClickComponente = (id) => {
        this.setState({
            addMusica: !this.state.addMusica,
            idMusica: id
        })        
    }
    
    renderizaDados = () => {
        const playlistMapeada = this.state.playlists.map((playlist) => {
            return (
                <div key={playlist.id}>
                    <span>{playlist.name}</span>
                    <button onClick={() => this.deletarPlaylist(playlist.id, playlist.name)}>X</button>
                    <button onClick={() => this.onClickComponente(playlist.id)}>+</button>
                </div>
            )
        })

        return playlistMapeada;
    }

    render() {
        return(
            <div>
                {this.props.children}
                <h1>Lista de Playlists</h1>
                {this.renderizaDados()}

                {this.state.addMusica && <AdicionarMusica minhaprop={this.state.idMusica}/>}
            </div>
        )
    }
}

export default ListarPlaylist;