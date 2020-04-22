import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { Typography, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';


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
        const { goBackOnePage } = this.props

        return (            
            <ContainerComponent>
                <Typography variant="h4">Criar Nova Viagem</Typography>

                <ContainerForm onSubmit={this.handleFormSubmit}>                
                    <TextField
                        inputProps={{
                            minLength: 5
                        }}
                        required
                        type="text"
                        name="nome"                        
                        id="standard-basic"
                        label="Nome da viagem"
                        pattern="[A-Za-z ãé]{3,}"
                        onChange={this.handleInputChange}
                        value={this.state.form.nome || ""}
                    />
                    
                    <label>Planeta:</label>
                    <select>
                    <option>Mercúrio</option>
                        <option>Vênus</option>
                        <option>Marte</option>
                        <option>Júpiter</option>
                        <option>Saturno</option>
                        <option>Urano</option>
                        <option>Netuno</option>
                    </select> 

                    <TextField
                        required
                        type="text"
                        id="standard-basic"
                        label="Data" 
                    />

                    <TextField
                        inputProps={{
                            minLength: 30
                        }}
                        required
                        type="text"
                        id="standard-basic"
                        label="Descrição" 
                    />

                    <TextField
                        inputProps={{
                            minLength: 50
                        }}
                        required
                        type="text"
                        id="standard-basic"
                        label="Duração" 
                    />
                    
                    <Button variant="outlined" type="submit">
                        Enviar
                    </Button>

                    <Button variant="outlined" onClick={goBackOnePage}>Voltar</Button>

                </ContainerForm>
            </ContainerComponent>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    goBackOnePage: () => dispatch(goBack())
})

export default connect(null, mapDispatchToProps)(CreateTripPage)