import React from 'react';
import './SmallCard.css';

function SmallCard(props){
    return(
        <div className="smallCard">            
            <img src={props.img} />
            <strong>{ props.tipo }</strong>
            <span>{ props.texto }</span>
        </div>
    );
}

export default SmallCard;