import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
    {/* Header */}
    <header>
        <h1>FutureTube</h1>
        <input type="search" placeholder="Busca" name="busca" id="busca"/>
    </header>

    {/* Menu Lateral */}
    <div className="menuLateral">
      <ul>
        <li><a href="#">Ínicio</a></li>
        <li><a href="#">Em alta</a></li>
        <li><a href="#">Inscrições</a></li>
        <li><a href="#">Favoritos</a></li>
        <li><a href="#">Sobre</a></li>
      </ul>
    </div>

    {/* Conteúdo Principal */}
    <main>
        <div><img src={require("./img/1.jpg")}/><a href="./video1.html">Media 1</a></div>
        <div><img src={require("./img/2.jpg")}/><a href="./video2.html">Media 2</a></div>
        <div><img src={require("./img/3.jpg")}/>
            <p>Media 3</p>
        </div>
        <div><img src={require("./img/4.jpg")}/>
            <p>Media 4</p>
        </div>
        <div><img src={require("./img/5.jpg")}/>
            <p>Media 5</p>
        </div>
        <div><img src={require("./img/6.jpg")}/>
            <p>Media 6</p>
        </div>
        <div><img src={require("./img/7.jpg")}/>
            <p>Media 7</p>
        </div>
        <div><img src={require("./img/8.jpg")}/>
            <p>Media 8</p>
        </div>
    </main>

    {/* Footer */}
    <footer>
        <h3>2020 - Footer do Futuro!</h3>
    </footer>
    </div>
  );
}

export default App;