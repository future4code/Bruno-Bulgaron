import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { push, replace } from 'connected-react-router';
import { routes } from '../Router';
import { fetchTrips, setIds } from '../../actions/trips';
import styled from 'styled-components';

const ContainerListTripsAdmin = styled.div `
    display: flex;
    flex-direction: column;
    max-width: 50vw;
    margin: 0 auto;
    border: 1px solid black;
`

class ListTripsAdmin extends React.Component{      

    componentDidMount() {
        const token = localStorage.getItem('token')
        if(token === null) {
            this.props.goToLoginPage()
        }
        
        if(this.props.fetchTrips) {
            this.props.fetchTrips()
        }

    }

    handleTripId = (id) => {
        console.log(id)
        this.props.setIds()
        this.props.goToTripsDetailsPage()
    }
    
    render() {
        const { goBackOnePage } = this.props
        
        return (
            <ContainerListTripsAdmin>
                <h1>ListTripsAdmin Component</h1>
                <h3>Viagens Disponíveis</h3>
                <div>
                    {this.props.allTrips.map((trip) => {
                        return (
                            <div>
                                <p><strong>Nome: </strong>{trip.name}</p>
                                <p><strong>Descrição: </strong>{trip.description}</p>
                                <p><strong>Planeta: </strong>{trip.planet}</p>
                                <p><strong>Duração: </strong>{trip.durationInDays}</p>
                                <p><strong>Data: </strong>{trip.date}</p>
                                <button onClick={() => {this.handleTripId(trip.id)}}>Detalhes</button>
                                <hr />
                            </div>
                        )
                    })}
                </div>
                <button onClick={goBackOnePage}>Voltar</button>
            </ContainerListTripsAdmin>
        )
    }
}

const mapStateToProps = state => ({
    allTrips: state.trips.allTrips
})

const mapDispatchToProps = dispatch => ({
    fetchTrips: () => dispatch(fetchTrips()),
    goBackOnePage: () => dispatch(goBack()),
    goToLoginPage: () => dispatch(replace(routes.login)),
    goToTripsDetailsPage: () => dispatch(push(routes.tripsDetails)),
    setIds: (id) => dispatch(setIds(id))
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(ListTripsAdmin);