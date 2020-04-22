import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { push } from 'connected-react-router';
import { routes } from '../Router';

class ListTripsAdmin extends React.Component{
    render() {

        const { goBackOnePage } = this.props
        
        return (
            <div>
                <h1>ListTripsAdmin Component</h1>
                <h3>Viagens Disponíveis</h3>
                <ul>
                    <li>Placeholder Tripy thingy</li>
                    <li>Placeholder Tripy thingy</li>            
                </ul>
                <button onClick={goBackOnePage}>Voltar</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    goBackOnePage: () => dispatch(goBack())
  })
  
  export default connect(null, mapDispatchToProps)(ListTripsAdmin);