import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { push } from 'connected-react-router';
import { routes } from '../Router';

class ListTripsPage extends React.Component{
    render() {

        const { goBackOnePage, goToLoginPage } = this.props
        
        return (
            <div>
                <h1>ListTripsPage Component</h1>
                <h3>Viagens Disponíveis</h3>
                <ul>
                    <li>Viagem</li>
                    <li>Viagem</li>
                    <li>Viagem</li>
                    <li>Viagem</li>
                    <li>Viagem</li>
                    <li>Viagem</li>
                    <li>Viagem</li>
                    <li>Viagem</li>
                    <li>Viagem</li>
                    <li>Viagem</li>
                </ul>
                <button onClick={goBackOnePage}>Voltar</button>
                <button onClick={goToLoginPage}>Ir para página de Login</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    goToLoginPage: () => dispatch(push(routes.login)),
    goBackOnePage: () => dispatch(goBack())
  })
  
  export default connect(null, mapDispatchToProps)(ListTripsPage);