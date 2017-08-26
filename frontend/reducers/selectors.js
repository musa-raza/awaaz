import { values } from 'lodash';

export const selectAllSongs = (state) => {
  return values(state.entities.songs.songs);
};
