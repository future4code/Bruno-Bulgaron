import React from 'react';
import './TituloSecao.css';

function TituloSecao(props){
    return(
        <div className="tituloDaSecao">
           <h2>{ props.titulo }</h2>
           {props.children}
        </div>
    );
}

export default TituloSecao;