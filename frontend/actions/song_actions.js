import * as APIUtil from '../util/song_api_util';
export const RECEIVE_A_SONG = 'RECEIVE_A_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const DELETE_SONG = 'DELETE_SONG';

export const receiveAllSongs = (payload) => {
  return({
    type: RECEIVE_SONGS,
    payload,
  });
};

export const receiveASong = (payload) => ({
  type: RECEIVE_A_SONG,
  payload,
});

export const removeSong = (id) => {
  return({
    type: DELETE_SONG,
    id,
  });
};

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

export const createSong = (song) => {
  return (dispatch) => {
    return APIUtil.createASong(song)
    .then((song) => dispatch(receiveASong(song)));
  };
};

export const deleteSong = (id) => {
  return (dispatch) => {
    return APIUtil.deleteASong(id)
    .then(() => dispatch(removeSong(id)));
  };
};
