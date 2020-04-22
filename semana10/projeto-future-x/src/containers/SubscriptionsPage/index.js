import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { push } from 'connected-react-router';
import { routes } from '../Router';

class SubscriptionsPage extends React.Component{
    render() {

        const { goBackOnePage } = this.props
        
        return (
            <div>
                <h1>SubscriptionsPage Component</h1>
                <hr />
                <h3>Inscrições</h3>
                <ul>
                    <li>Inscrição Placeholder</li>
                    <li>Inscrição Placeholder</li>
                </ul>
                <button onClick={goBackOnePage}>Voltar</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    goBackOnePage: () => dispatch(goBack())
  })
  
  export default connect(null, mapDispatchToProps)(SubscriptionsPage);