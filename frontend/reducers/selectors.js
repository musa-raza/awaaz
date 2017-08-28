import { values } from 'lodash';

export const selectAllSongs = (state) => {
  return values(state.entities.songs.songs);
};

export const selectUserSongs = (state, user) => {
  return user ? user.song_ids.map(id => user.songs[id]) : [];
};
