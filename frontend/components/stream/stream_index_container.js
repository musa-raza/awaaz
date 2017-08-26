import { connect } from 'react-redux';
import StreamIndex from './stream_index';
import { selectAllSongs } from '../../reducers/selectors';
import { logout } from '../../actions/session_actions';
import { playSong, pauseSong } from '../../actions/audio_actions';
import { requestAllSongs, requestSingleSong } from '../../actions/song_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    songs: selectAllSongs(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    requestAllSongs: () => dispatch(requestAllSongs()),
    requestSingleSong: (song) => dispatch(requestSingleSong(song)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamIndex);
