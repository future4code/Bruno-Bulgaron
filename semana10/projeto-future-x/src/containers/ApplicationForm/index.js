import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { Typography, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { fetchTrips } from '../../actions/trips';


const ContainerComponent = styled.div`
    text-align: center;
`

const ContainerForm = styled.form `
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 20px;
`


class ApplicationForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            form: {
                country: ''
            },
            trip: ''
        }
    }

    componentDidMount() {
        this.props.fetchTrips()
    }

    selectCountry (val) {
        this.setState({ country: val });  
    }   

    handleFormSubmit = event => {
        event.preventDefault()
        this.setState({
            form: {}
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }

    handleSelectTrip = event => {
        this.setState({
            trip: event.target.value
        })
    }

    render() {
        const { goToHomePage, fetchTrips } = this.props
        const { country } = this.state;

        return (            
            <ContainerComponent>
                <Typography variant="h4">Faça sua inscrição</Typography>

                <ContainerForm onSubmit={this.handleFormSubmit}>                
                    <TextField
                        inputProps={{                            
                            pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{3,}",
                            title: "O nome precisa ter no mínimo 5 caracteres"
                        }}
                        required
                        type="text"
                        name="nome"                        
                        id="standard-basic"
                        label="Nome"
                        onChange={this.handleInputChange}
                        value={this.state.form.nome || ""}
                    />

                    <TextField 
                        inputProps={{
                            min: 18,
                            max: 100,
                            title: "A idade deve ser maior ou igual a 18"
                        }}
                        required
                        name="idade"
                        type="number"
                        label="Digite sua idade"
                        onChange={this.handleInputChange}
                        value={this.state.form.idade || ""}
                    />

                    <TextField
                        inputProps={{
                            title: "É necessário 30 caracteres no mínimo.",
                            pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ!?.,;]{30,}"
                        }}
                        required
                        type="text"
                        name="descricao"                        
                        id="standard-basic"
                        label="Descreva-se"
                        onChange={this.handleInputChange}
                        value={this.state.form.descricao || ""}
                    />
                    
                    <TextField
                        inputProps={{
                            pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ!?.,;]{10,}",
                        }}
                        required
                        type="text"
                        name="profissao"                        
                        id="standard-basic"
                        label="Sua profissão"
                        onChange={this.handleInputChange}
                        value={this.state.form.profissao || ""}
                    />

                    <label>País:</label>
                    <CountryDropdown 
                        value={country}
                        onChange={(val) => this.selectCountry(val)}
                    />                    

                    <label>Selecione a viagem:</label>
                    <select onChange={this.handleSelectTrip}>
                        <option>Nenhum</option>
                        {this.props.allTrips.map((trip) => {
                            return (
                                <option 
                                    key={trip.id}
                                    value={trip.id}
                                >
                                    {trip.name} - {trip.planet}
                                </option>
                            )
                        })}
                    </select>

                    <Button variant="outlined" type="submit">
                        Enviar
                    </Button>
                    
                    <Button variant="outlined" onClick={goToHomePage}>Página Inicial</Button>
                </ContainerForm>
            </ContainerComponent>
        )
    }
}

const mapStateToProps = state => ({
    allTrips: state.trips.allTrips
})

const mapDispatchToProps = dispatch => ({
    goToHomePage: () => dispatch(push(routes.root)),
    fetchTrips: () => dispatch(fetchTrips())
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm)