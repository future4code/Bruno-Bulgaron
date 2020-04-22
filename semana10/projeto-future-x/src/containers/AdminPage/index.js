import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { push } from 'connected-react-router';
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
    render() {

        const { goToHomePage, goToCreateTripPage, goToListTripsPage, goToSubscriptionsPage } = this.props
        
        return (
            <ContainerAdmin>
                
                <Typography variant="h4" gutterBottom>Painel Administrativo</Typography>

                <Button variant="outlined" color="primary" onClick={goToCreateTripPage}>Criar Nova Viagem</Button>
                <Button variant="outlined" color="secondary" onClick={goToListTripsPage}>Listar Viagens</Button>
                <Button variant="outlined" onClick={goToSubscriptionsPage}>Inscrições</Button>
                <Button variant="outlined" onClick={goToHomePage}>Sair</Button>
            </ContainerAdmin>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    goToCreateTripPage: () => dispatch(push(routes.tripsCreate)),
    goToListTripsPage: () => dispatch(push(routes.tripsListAdmin)),
    goToSubscriptionsPage: () => dispatch(push(routes.subscriptions)),
    goToHomePage: () => dispatch(push(routes.root)),
  })
  
  export default connect(null, mapDispatchToProps)(AdminPage);