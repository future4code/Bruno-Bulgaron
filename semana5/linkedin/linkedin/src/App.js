import React from 'react';
import logo from './logo.svg';
import './App.css';
import BigCard from './Components/BigCard/BigCard';
import ImageButton from './Components/ImageButton/ImageButton';
import SmallCard from './Components/SmallCard/SmallCard';
import TituloSecao from './Components/TituloSecao/TituloSecao';

function App() {
  return (
    <div className="App">
      <TituloSecao titulo="Dados Pessoais">                
        <BigCard imagem="https://abrilexame.files.wordpress.com/2018/10/capaprofile.jpg" titulo="Bruno Bulgaron" texto="Oi, me chamo Bruno Bulgaron. Sou tecladista profissional a 10 anos, e atualmente estou cursando Desenvolvimento Web Full Stack na Future4." alt="imgPerfil" />
        <SmallCard email="brunohbulgaron@gmail.com" endereco="Rua das Maravilhas, 123" />
        <ImageButton nomeBotao="Ver mais" />
      </TituloSecao>
    </div>
  );
}

export default App;
