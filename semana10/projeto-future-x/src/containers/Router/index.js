import React                from           "react";
import { ConnectedRouter }  from           "connected-react-router";
import { Switch, Route }    from           "react-router-dom";
import { connect }          from           'react-redux';

import HomePage             from           "../HomePage";
import ApplicationForm      from           "../ApplicationForm";
import LoginPage            from           "../LoginPage";
import AdminPage            from           "../AdminPage";
import CreateTripPage       from           "../CreateTripPage";
import ListTripsPage        from           "../ListTripsPage";
import ListTripsAdmin       from           "../ListTripsAdmin";
import TripDetailsPage      from           "../TripDetailsPage";
import SubscriptionsPage    from           "../SubscriptionsPage";

export const routes = {

  root: "/",                               // Página Inicial
  applicationForm: "/application-form",    // Para qualquer Usuário poder se inscrever
  login: "/login",                         // Para o Admin poder se logar
  adminPanel: "/admin",                    // Para o Admin poder acessar o painel
  tripsCreate: "/trips/create",            // Para criarmos viagens
  tripsList: "/trips/list",                // Para vermos todas as viagens
  tripsListAdmin: "/trips/list-admin",     // Para vermos todas as viagens como Admin
  tripsDetails: "/trips/details",          // Para vermos os candidatos de uma viagem
  subscriptions: "/trips/subscriptions"    // Para vermos as inscrições como Admin

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
      <Route exact path={routes.root}                component={HomePage}          />
      <Route exact path={routes.applicationForm}     component={ApplicationForm}   />
      <Route exact path={routes.login}               component={LoginPage}         />
      <Route exact path={routes.adminPanel}          component={AdminPage}         />
      <Route exact path={routes.tripsCreate}         component={CreateTripPage}    />
      <Route exact path={routes.tripsList}           component={ListTripsPage}     />
      <Route exact path={routes.tripsListAdmin}      component={ListTripsAdmin}    />
      <Route exact path={routes.tripsDetails}        component={TripDetailsPage}   />
      <Route exact path={routes.subscriptions}       component={SubscriptionsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default connect()(Router);
