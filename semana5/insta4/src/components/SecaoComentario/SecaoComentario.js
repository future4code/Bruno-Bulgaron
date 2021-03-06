import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	constructor(props) {
		super(props)

		this.state = {
			comentarioUsuario: ""
		}
	}

	onChangeComentario = (event) => {
		let conteudoComentario = event.target.value

		this.setState({
			comentarioUsuario: conteudoComentario
		})
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentarioUsuario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
