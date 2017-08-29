import { values } from 'lodash';

export const selectAllSongs = (state) => {
  return values(state.entities.songs);
};

export const selectUserSongs = (state, user) => {
  return user ? user.song_ids.map(id => user.songs[id]) : [];
};

export const selectSongComments = (state, song) => {
  debugger
  return song ? song.comment_ids.map(id => state.entities.comments[id]) : [];
};
