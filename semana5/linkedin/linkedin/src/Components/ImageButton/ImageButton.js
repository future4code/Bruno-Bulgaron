import React from 'react';
import './ImageButton.css';

function ImageButton(props){
    return (
        <div className="imageButton">
            <div className="divDoBotao">
                <button>{ props.nomeBotao }</button>
            </div>
        </div>
    );
}

export default ImageButton;