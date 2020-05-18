import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import { routes } from '../Router';

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { login } from "../../actions/trips";

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = event => {
    event.preventDefault()
    this.props.login(
      this.state.email,
      this.state.password
    )
  }

  render() {
    const { email, password } = this.state;
    const { goToHomePage, goToAdminPage } = this.props

    return (
      <LoginWrapper onSubmit={this.handleLogin}>
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button type="submit">Login</Button>
        <Button onClick={goToHomePage}>Voltar</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goToAdminPage: () => dispatch(push(routes.adminPanel)),
  goToHomePage: () => dispatch(push(routes.root)),
  login: (email, password) => dispatch(login(email, password))
})

export default connect(null, mapDispatchToProps)(LoginPage);