import React from 'react';
import axios from 'axios';

class AdicionarMusica extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValueTitulo: '',
            inputValueArtista: '',
            inputValueUrl: ''
        }
    }

    onChangeInputTitulo = (event) => {
        this.setState({
            inputValueTitulo: event.target.value
        })
    }

    onChangeInputArtista = (event) => {
        this.setState({
            inputValueArtista: event.target.value
        })
    }

    onChangeInputUrl = (event) => {
        this.setState({
            inputValueUrl: event.target.value
        })
    }
    
    adicionaMusica = () => {
        const body = {
            name: this.state.inputValueTitulo,
            artist: this.state.inputValueArtista,
            url: this.state.inputValueUrl
        }

        axios.post(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${this.props.minhaprop}/songs`, body, {
            headers: {
                'Content-Type': 'application/json',
                'auth': 'bruno-hamilton'
            }
        }).then((response) => {
            alert(`A música ${this.state.inputValueTitulo} foi adicionada com sucesso!`)
            this.setState({
                inputValueTitulo: '',
                inputValueArtista: '',
                inputValueUrl: ''
            })
        }).catch((error) => {
            alert("Ocorreu um erro ao adicionar a música.")
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    <p>Título: </p>
                    <input 
                        type="text"
                        onChange={this.onChangeInputTitulo}
                        value={this.state.inputValueTitulo}
                    ></input>                
                    
                    <p>Artista: </p>
                    <input 
                        type="text"
                        onChange={this.onChangeInputArtista}
                        value={this.state.inputValueArtista}
                    ></input>                
                    
                    <p>URL: </p>                
                    <input 
                        type="text"
                        onChange={this.onChangeInputUrl}
                        value={this.state.inputValueUrl}
                    ></input>                
                    <br />
                    <button onClick={this.adicionaMusica}>Adicionar</button>
                </div>
            </div>
        )
    }
}

export default AdicionarMusica;