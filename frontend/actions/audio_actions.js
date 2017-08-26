export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';

export const playSong = () => {
  return({
    type: PLAY_SONG
  });
};

export const pauseSong = () => {
  return({
    type: PAUSE_SONG
  });
};
