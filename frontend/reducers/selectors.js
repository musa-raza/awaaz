import { values } from 'lodash';

export const selectAllSongs = (state) => {
  return values(state.entities.songs);
};

export const selectUserSongs = (state, user) => {
  return user ? user.song_ids.map(id => user.songs[id]) : [];
};

export const selectSongComments = (state, song) => {
  return song ? song.comment_ids.map(id => state.entities.comments[id]) : [];
};

export const selectSingleSong = (state, id) => {
  if (id === undefined) {
    return {};
  }
  return state.entities.songs[parseInt(id)];
};
