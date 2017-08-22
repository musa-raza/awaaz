import React from 'react';
import LoginContainer from './login_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <h1>Awaaz</h1>
      </header>
      <Route exact path="/" component={LoginContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;
