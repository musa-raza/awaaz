import React from 'react';
import LoginContainer from './login_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div className="app-div">
      <Route exact path="/" component={LoginContainer} />
      <AuthRoute path="/stream" component={SessionFormContainer} />
    </div>
  );
};

export default App;
