import React from 'react';
import './BigCard.css';

function BigCard(props){
    return(
        <div className="bigCard">
            <section className="bigCard">
                
                <img src={props.imagem} alt="imgPerfil" />

                <h4>{ props.titulo }</h4>

                <p> { props.texto }</p>

                {/* <div className="divDosTextos">
                    <h4>{props.titulo}</h4>
                    <p>{props.descricao}</p>
                </div> */}

            </section>
        </div>
    );
}

export default BigCard;

{/* <img src={require("../../img/perfil.jpg")} /> */}