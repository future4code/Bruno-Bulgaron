import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { push, replace } from 'connected-react-router';
import { routes } from '../Router';
import { Typography, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { createNewTrip } from '../../actions/trips';


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


class CreateTripPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            form: {}
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        if(token === null) {
            this.props.goToLoginPage()
        }
    }

    handleFormSubmit = event => {
        event.preventDefault()
        this.props.createNewTrip(this.state.form, localStorage.getItem("token"))
        
        console.log(this.state.form)
        
        this.setState({
            form: ''
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
        const { goBackOnePage } = this.props

        return (            
            <ContainerComponent>
                <Typography variant="h4">Criar Nova Viagem</Typography>

                <ContainerForm onSubmit={this.handleFormSubmit}>                
                    <TextField
                        inputProps={{
                            pattern: "[A-Za-z ãé]{5,}"
                        }}
                        required
                        type="text"
                        name="name"                        
                        id="standard-basic"
                        label="Nome da viagem"
                        onChange={this.handleInputChange}
                        value={this.state.form.name || ""}
                    />                                        

                    <label>Data: </label>
                    <TextField
                        inputProps={{
                            min:"2020-04-24",
                            max:"2021-04-24"
                        }}                        
                        required
                        name="date"
                        type="date"
                        id="standard-basic"                        
                        onChange={this.handleInputChange}
                        value={this.state.form.date}
                    />

                    <TextField
                        inputProps={{
                            pattern: "[A-Za-z ãé]{30,}"
                        }}
                        required
                        name="description"
                        type="text"
                        id="standard-basic"
                        label="Descrição" 
                        onChange={this.handleInputChange}
                        value={this.state.form.description}
                    />

                    <TextField
                        inputProps={{
                            min: 50
                        }}
                        required
                        name="durationInDays"
                        type="number"
                        id="standard-basic"
                        label="Duração"
                        onChange={this.handleInputChange}
                        value={this.state.form.durationInDays}
                    />

                    <label>Planeta:</label>
                    <select 
                        required
                        name="planet"
                        onChange={this.handleInputChange}
                        value={this.state.form.planet}
                    >
                        <option>Mercúrio</option>
                        <option>Vênus</option>
                        <option>Marte</option>
                        <option>Júpiter</option>
                        <option>Saturno</option>
                        <option>Urano</option>
                        <option>Netuno</option>
                    </select>
                    
                    <Button variant="outlined" type="submit">
                        Criar
                    </Button>

                    <Button variant="outlined" onClick={goBackOnePage}>Voltar</Button>

                </ContainerForm>
            </ContainerComponent>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    goBackOnePage: () => dispatch(goBack()),
    goToLoginPage: () => dispatch(replace(routes.login)),
    createNewTrip: (body, token) => dispatch(createNewTrip(body, token))
})

export default connect(null, mapDispatchToProps)(CreateTripPage)