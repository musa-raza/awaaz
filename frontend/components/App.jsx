import React from 'react';
import LoginContainer from './login//login_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import StreamContainer from './stream/stream_container';

const App = () => {
  return (
    <div className="app-div">
      <AuthRoute exact path="/" component={LoginContainer} />
      <ProtectedRoute path="/stream" component={StreamContainer} />
    </div>
  );
};

export default App;


// <AuthRoute path="/" component={SessionFormContainer} />
// authroute is /
// make protected route in route util checking for !logged
// Protected route path='/stream' component={StremContainer}
