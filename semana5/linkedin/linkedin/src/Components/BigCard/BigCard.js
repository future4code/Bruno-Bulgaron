import React from 'react';
import './BigCard.css';

function BigCard(props){
    return(
        <div className="bigCard">

            <img src={ props.imagem } alt={ props.altImg } />
            <h4>{ props.titulo }</h4>
            <p> { props.texto }</p>
        
        </div>
    );
}

export default BigCard;