import * as APIUtil from '../util/song_api_util';
export const RECEIVE_A_SONG = 'RECEIVE_A_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';

export const receiveAllSongs = (songs) => {
  return({
    type: RECEIVE_SONGS,
    songs
  });
};

export const receiveASong = (payload) => ({
  type: RECEIVE_A_SONG,
  payload,
});



export const requestAllSongs = () => {
  return (dispatch) => {
    return APIUtil.fetchAllSongs()
    .then((songs) => dispatch(receiveAllSongs(songs)));
  };
};

export const requestSingleSong = (id) => {
  return (dispatch) => {
    return APIUtil.fetchASong(id)
    .then((song) => dispatch(receiveASong(song)));
  };
};
