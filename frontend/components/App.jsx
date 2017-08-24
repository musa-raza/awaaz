import React from 'react';
import LoginContainer from './login//login_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import StreamContainer from './stream/stream_container';
import UserDetailContainer from './user/user_detail_container';

const App = () => {
  return (
    <div className="app-div">
      <AuthRoute exact path="/" component={LoginContainer} />
      <ProtectedRoute exact path="/stream" component={StreamContainer} />
      <ProtectedRoute exact path="/users/:username" component={UserDetailContainer} />
    </div>
  );
};

export default App;
