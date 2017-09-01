import { connect } from 'react-redux';
import StreamIndex from './stream_index';
import { selectAllSongs } from '../../reducers/selectors';
import { logout } from '../../actions/session_actions';
import { playSong, pauseSong, setQueue } from '../../actions/audio_actions';
import { requestAllSongs, requestSingleSong } from '../../actions/song_actions';
import { deleteSong } from '../../actions/song_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    songs: selectAllSongs(state),
    status: state.audio.status,
    currentTrackObject: state.audio.currentTrackObject,
    currentTrack: state.audio.currentTrack
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    requestAllSongs: () => dispatch(requestAllSongs()),
    requestSingleSong: (song) => dispatch(requestSingleSong(song)),
    logout: () => dispatch(logout()),
    setQueue: (songs, id) => dispatch(setQueue(songs, id)),
    deleteSong: (song) => dispatch(deleteSong(song))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamIndex);
