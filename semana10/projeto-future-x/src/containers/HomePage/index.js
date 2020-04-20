import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';

class HomePage extends React.Component{
    render() {

        const { goToLoginPage } = this.props

        return (
            <div>
                <h1>HomePage Component</h1>
                <button onClick={goToLoginPage}>Ir para página de Login</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    goToLoginPage: () => dispatch(push(routes.login))
})

export default connect(null, mapDispatchToProps)(HomePage)