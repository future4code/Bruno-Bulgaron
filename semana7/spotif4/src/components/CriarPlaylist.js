import React from 'react';
import axios from 'axios';

class CriarPlaylist extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValueNome : ''
        }
    }

    onChangeInputNome = (event) => {
        this.setState({
            inputValueNome: event.target.value
        })

        console.log(this.state.inputValueNome)
    }

    addPlaylist = () => {
        const body = {
            name: this.state.inputValueNome
        }

        axios.post('https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists', body, {
            headers: {
                'Content-Type': 'application/json',
                'auth': 'bruno-hamilton'
            }
        }).then((response) => {
            alert(`A playlist ${this.state.inputValueNome} foi criada com sucesso!`)
            this.setState({
                inputValueNome: ''
            })
        }).catch((error) => {
            alert("Ocorreu um erro ao criar a Playlist.")
        })
    }

    render() {
        return(
            <div>
                {this.props.children}
                <h3>Criar Playlist</h3>
                <hr />
                <label>Nome: </label>
                <input 
                    type="text"
                    onChange={this.onChangeInputNome}
                    value={this.state.inputValueNome}
                ></input>
                <button onClick={this.addPlaylist}>Criar</button>
            </div>
        )
    }
}

export default CriarPlaylist;