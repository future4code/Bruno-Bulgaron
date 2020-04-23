import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { Typography, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


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
            }
        }
    }

    selectCountry (val) {
        this.setState({ country: val });
      }
     
    selectRegion (val) {
    this.setState({ region: val });
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

    render() {
        const { goToHomePage } = this.props
        const { country, region } = this.state;

        return (            
            <ContainerComponent>
                <Typography variant="h4">Faça sua inscrição</Typography>

                <ContainerForm onSubmit={this.handleFormSubmit}>                
                    <TextField
                        inputProps={{
                            minLength: 5
                        }}
                        required
                        type="text"
                        name="nome"                        
                        id="standard-basic"
                        label="Digite seu nome"
                        pattern="[A-Za-z ãé]{3,}"
                        onChange={this.handleInputChange}
                        value={this.state.form.nome || ""}
                    />

                    <TextField 
                        inputProps={{
                            min: 18
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
                            minLength: 30
                        }}
                        required
                        type="text"
                        name="descricao"                        
                        id="standard-basic"
                        label="Descreva-se"
                        pattern="[A-Za-z ãé]{3,}"
                        onChange={this.handleInputChange}
                        value={this.state.form.descricao || ""}
                    />
                    
                    <TextField
                        inputProps={{
                            minLength: 10
                        }}
                        required
                        type="text"
                        name="profissao"                        
                        id="standard-basic"
                        label="Sua profissão"
                        pattern="[A-Za-z ãé]{3,}"
                        onChange={this.handleInputChange}
                        value={this.state.form.profissao || ""}
                    />

                    <label>País:</label>
                    <CountryDropdown 
                        value={country}
                        onChange={(val) => this.selectCountry(val)}
                    />

                    <label>Estado:</label>
                    <RegionDropdown 
                        country={country}
                        value={region}
                        onChange={(val) => this.selectRegion(val)}
                    />
                    
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
    goToHomePage: () => dispatch(push(routes.root))
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm)