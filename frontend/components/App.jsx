import React from 'react';
import LoginContainer from './login//login_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import StreamContainer from './stream/stream_container';
import UserDetailContainer from './user/user_detail_container';
import NavBar from './navbar';

const App = () => {
  return (
    <div className="app-div">
      <ProtectedRoute path="/" component={NavBar} />
      <ProtectedRoute exact path="/users/:username" component={UserDetailContainer} />
      <Switch>
      <ProtectedRoute exact path="/stream" component={StreamContainer}
        />
      <AuthRoute exact path="/" component={LoginContainer} />
      </Switch>
    </div>
  );
};

export default App;
