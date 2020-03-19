import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props)

    // Inicializa o estado
    this.state = {
      // Lista de posts
      posts: [
        {
          nomeUsuario: "paulinha",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150"
        },
        {
          nomeUsuario: "jack-sparrow",
          fotoUsuario: "https://cdn.leouve.com.br/2017/05/20170106-jack-sparrow.jpg",
          fotoPost: "https://cdn.leouve.com.br/2017/05/20170106-jack-sparrow.jpg"
        },
        {
          nomeUsuario: "cardi-b",
          fotoUsuario: "https://img.buzzfeed.com/buzzfeed-static/static/2020-03/16/20/campaign_images/909db9ff4850/a-mans-remix-of-cardi-b-saying-coronavirus-is-giv-2-3602-1584390625-7_dblbig.jpg",
          fotoPost: "https://img.buzzfeed.com/buzzfeed-static/static/2020-03/16/20/campaign_images/909db9ff4850/a-mans-remix-of-cardi-b-saying-coronavirus-is-giv-2-3602-1584390625-7_dblbig.jpg"
        }
      ],

      // Variáveis que guardam os valores dos inputs na tela
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    }
  }

  render() {
    return (
      
      this.state.posts.map((post, index) => {
        return(
          <div className={'app-container'}>
            <Post 
              nomeUsuario = {post.nomeUsuario}
              fotoUsuario = {post.fotoUsuario}
              fotoPost = {post.fotoPost}
              key = {index}
            />

            {/* Formulário */}

            <input 
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome"}
            />
            <input 
              value={this.state.valorInputFotoUsuario}
              onChange={this.onChangeInputFotoUsuario}
              placeholder={"Foto do Usuário"}
            />
            <input 
              value={this.state.valorInputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={"Foto do Post"}
            />

            <button>Postar</button>

          </div>
        )
      })
    );
  }
}

export default App;