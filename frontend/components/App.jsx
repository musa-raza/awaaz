import React from 'react';
import LoginContainer from './login//login_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import StreamIndexContainer from './stream/stream_index_container';
import UserDetailContainer from './user/user_detail_container';
import NavBar from './navbar';
import UploadForm from './upload_form';
import SongShow from './song_show';
import AudioPlayer from './audio_player';
import SongEditForm from './song_edit_form';

const App = () => {
  return (
    <div className="app-div">
      <ProtectedRoute path="/" component={NavBar} />
      <ProtectedRoute exact path="/users/:username" component={UserDetailContainer} />
      <ProtectedRoute exact path="/upload" component={UploadForm} />
      <ProtectedRoute path="/" component={AudioPlayer} />
      <Switch>
        <ProtectedRoute exact path="/songs/:songId" component={SongShow} />
        <ProtectedRoute exact path="/songs/:songId/edit" component={SongEditForm} />
      </Switch>
      <Switch>
      <ProtectedRoute exact path="/stream" component={StreamIndexContainer}
        />
      <AuthRoute exact path="/" component={LoginContainer} />
      </Switch>
    </div>
  );
};

export default App;
