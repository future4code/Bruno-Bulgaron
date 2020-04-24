import React from 'react';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';
import { routes } from '../Router';
import { getTripDetails } from  '../../actions/trips';

class TripDetailsPage extends React.Component{
    
    componentDidMount() {
        const token = localStorage.getItem('token')
        if(token === null) {
            this.props.goToLoginPage()
        }

        this.props.getTripDetails(this.props.tripId, localStorage.getItem("token"))
    }
    
    render() {

        const { tripDetails } = this.props

        return (
            <div>
                <h2>Detalhes da Viagem</h2>
                <p>{tripDetails.name}</p>
                <p>{tripDetails.planet}</p>
                <p>{tripDetails.date}</p>

                {/* {tripDetails.candidates.map((candidates) => {
                    return (
                        <p>{candidates.name}</p>
                    )
                })} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tripDetails: state.trips.tripDetails,
    tripId: state.trips.tripId
})

const mapDispatchToProps = (dispatch) => ({
    goToLoginPage: () => dispatch(replace(routes.login)),
    getTripDetails: (id, token) => dispatch(getTripDetails(id, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage)