import React from 'react';
import { connect } from 'react-redux';
import { push, replace } from 'connected-react-router';
import { routes } from '../Router';
import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components';

const ContainerAdmin = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 35rem;
    gap: 5px;
    text-align: center;
`

class AdminPage extends React.Component{

    componentDidMount() {
        const token = localStorage.getItem('token')
        if(token === null) {
            this.props.goToLoginPage()
        }
    }

    handleLogout = () => { 
        localStorage.clear();
        window.location.reload()
    }

    render() {

        const isLogged = localStorage.getItem('token') !== null
        
        const { goToCreateTripPage, goToListTripsPage, goToSubscriptionsPage } = this.props
        
        return (
            <ContainerAdmin>
                
                <Typography variant="h4" gutterBottom>Painel Administrativo</Typography>

                <Button variant="outlined" color="primary" onClick={goToCreateTripPage}>Criar Nova Viagem</Button>
                <Button variant="outlined" color="secondary" onClick={goToListTripsPage}>Listar Viagens</Button>
                <Button variant="outlined" onClick={goToSubscriptionsPage}>Inscrições</Button>
                {isLogged && <Button variant="outlined" onClick={this.handleLogout}>Logout</Button>}
            </ContainerAdmin>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    goToCreateTripPage: () => dispatch(push(routes.tripsCreate)),
    goToListTripsPage: () => dispatch(push(routes.tripsListAdmin)),
    goToSubscriptionsPage: () => dispatch(push(routes.subscriptions)),
    goToLoginPage: () => dispatch(replace(routes.login))
  })
  
  export default connect(null, mapDispatchToProps)(AdminPage);