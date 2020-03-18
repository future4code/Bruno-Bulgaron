import React from 'react';
import './ImageButton.css';

function ImageButton(props){
    return (
        <div className="imageButton">
            <div className="divDoBotao">
                <img src={ props.imgButton } />
                <p>{ props.nomeBotao }</p>
            </div>
        </div>
    );
}

export default ImageButton;