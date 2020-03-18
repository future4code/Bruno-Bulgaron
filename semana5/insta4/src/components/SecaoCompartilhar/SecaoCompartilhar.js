import React, {Component} from 'react'
import './SecaoCompartilhar.css'

export class SecaoCompartilhar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	// onChangeCompartilhar = (event) => {
    //     let conteudoComentario = event.target.value
	// }

	render() {
		return <div className={'compartilhar-container'}>
            <div>
                <img src={require("../../img/instagram.png")} alt={"instagram"} />
                <img src={require("../../img/facebook.png")} alt={"facebook"} />
                <img src={require("../../img/twitter.png")} alt={"twitter"} />
            </div>
			{/* <button onClick={this.props.aoCompartilhar}>Compartilhar</button> */}
		</div>
	}
}
