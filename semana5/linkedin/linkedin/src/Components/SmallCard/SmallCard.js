import React from 'react';
import './SmallCard.css';

function SmallCard(props){
    return(
        <div className="smallCard">
            <div className="divEmail">
                <img src={require("../../img/envelope.png")} />
                <p><strong>E-mail:</strong> {props.email}</p>
            </div>

            <div className="divEndereco">
                <img src={require("../../img/home.png")} />
                <p><strong>Endereço:</strong> {props.endereco}</p>
            </div>
        </div>
    );
}

export default SmallCard;