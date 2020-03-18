import React from 'react';
import './App.css';
import BigCard from './Components/BigCard/BigCard';
import ImageButton from './Components/ImageButton/ImageButton';
import SmallCard from './Components/SmallCard/SmallCard';
import TituloSecao from './Components/TituloSecao/TituloSecao';

function App() {
  return (
    <div className="App">

      {/* Dados Pessoais */}
      <TituloSecao titulo={"Dados Pessoais"} />

      <BigCard imagem={"https://abrilexame.files.wordpress.com/2018/10/capaprofile.jpg"} titulo={"Bruno Bulgaron"} texto={"Oi, me chamo Bruno Bulgaron. Sou tecladista profissional a 10 anos, e atualmente estou cursando Desenvolvimento Web Full Stack na Future4."} altImg={"imgPerfil"} />

      <SmallCard img={require("./img/envelope.png")} tipo={"E-mail: "} texto={"brunohbulgaron@gmail.com"} />
      <SmallCard img={require("./img/home.png")} tipo={"Endereço: "} texto={"Rua dos Testes, 123"} />

      <ImageButton imgButton={require("./img/arrowdown.png")} nomeBotao={"Ver mais"} />

      {/* Experiências Profissionais */}
      <TituloSecao titulo={"Dados Pessoais"} />

      <BigCard imagem={"https://abrilexame.files.wordpress.com/2018/10/capaprofile.jpg"} titulo={"Bruno Bulgaron"} texto={"Oi, me chamo Bruno Bulgaron. Sou tecladista profissional a 10 anos, e atualmente estou cursando Desenvolvimento Web Full Stack na Future4."} altImg={"imgPerfil"} />
      <BigCard imagem={"https://abrilexame.files.wordpress.com/2018/10/capaprofile.jpg"} titulo={"Bruno Bulgaron"} texto={"Oi, me chamo Bruno Bulgaron. Sou tecladista profissional a 10 anos, e atualmente estou cursando Desenvolvimento Web Full Stack na Future4."} altImg={"imgPerfil"} />                      

      {/* Minhas Redes Sociais */}
      <TituloSecao titulo={"Minhas redes sociais"} />
      <ImageButton imgButton={require("./img/arrowdown.png")} nomeBotao={"Ver mais"} />
    
    </div>
  );
}

export default App;