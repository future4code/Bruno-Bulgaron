import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { fetchTrips } from '../../actions/trips';

const Container = styled.div `
    display: grid;
    justify-content: center;
    gap: 10px;
`

class HomePage extends React.Component{
    render() {

        const { goToLoginPage, goToApplicationForm } = this.props
        this.props.fetchTrips()

        return (
            <Container>
                <Typography variant="h3" gutterBottom>Página Inicial</Typography>
                <Button variant="outlined" onClick={goToLoginPage}>Login</Button>
                <Button variant="outlined" onClick={goToApplicationForm}>Quero me inscrever!</Button>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    goToLoginPage: () => dispatch(push(routes.login)),
    goToApplicationForm: () => dispatch(push(routes.applicationForm)),
    fetchTrips: () => dispatch(fetchTrips())
})

export default connect(null, mapDispatchToProps)(HomePage)