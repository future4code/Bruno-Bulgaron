import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import LoginPage from "../LoginPage";
import CreateTripPage from "../CreateTripPage";
import HomePage from "../HomePage";
import ListTripsPage from "../ListTripsPage";
import TripDetailsPage from "../TripDetailsPage";

export const routes = {
  root: "/",                               // Para o usuário escolher entre login e formulário de aplicação
  applicationForm: "/application-form",    // Para qualquer usuário poder se inscrever
  login: "/login",                         // Para o admin poder se logar
  tripsCreate: "/trips/create",            // Para criarmos viagens
  tripsList: "/trips/list",                // Para vermos todas as viagens
  tripsDetails: "/trips/details"          // Para vermos os candidatos de uma viagem
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root}         component={HomePage}        />
        <Route exact path={routes.login}        component={LoginPage}       />
        <Route exact path={routes.tripsCreate}  component={CreateTripPage}  />
        <Route exact path={routes.tripsList}    component={ListTripsPage}   />
        <Route exact path={routes.tripsDetails} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default connect()(Router);
