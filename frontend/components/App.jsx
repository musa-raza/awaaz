import React from 'react';
import LoginContainer from './login//login_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import StreamIndexContainer from './stream/stream_index_container';
import UserDetailContainer from './user/user_detail_container';
import NavBar from './navbar';
import UploadForm from './upload_form';

const App = () => {
  return (
    <div className="app-div">
      <ProtectedRoute path="/" component={NavBar} />
      <ProtectedRoute exact path="/users/:username" component={UserDetailContainer} />
      <ProtectedRoute exact path="/upload" component={UploadForm} />
      <Switch>
      <ProtectedRoute exact path="/stream" component={StreamIndexContainer}
        />
      <AuthRoute exact path="/" component={LoginContainer} />
      </Switch>
    </div>
  );
};

export default App;
