export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const SET_QUEUE = 'SET_QUEUE';
export const UPDATE_QUEUE = 'UPDATE_QUEUE';
export const SET_USER_QUEUE = 'SET_USER_QUEUE';

export const playSong = () => {
  return({
    type: PLAY_SONG,
  });
};

export const pauseSong = () => {
  return({
    type: PAUSE_SONG
  });
};

export const setQueue = (songs, currentTrackId) => {
  const queue = [];

  if ( songs instanceof Array) {
    songs.reverse().forEach((song) => {
      if (song.id <= currentTrackId) {
        queue.push(song.id);
      }
    });
  } else {
    queue.push(songs.id);
  }


  return({
    type: SET_QUEUE,
    queue
  });
};

export const updateQueue = () => {
  return({
    type: UPDATE_QUEUE,
  });
};

export const setUserQueue = (songs, currentTrackId) => {
  const queue = [];
  songs.forEach((song) => {
    if (song.id <= currentTrackId) {
      queue.push(song.id);
    }
  });
  return({
    type: SET_USER_QUEUE,
    queue
  });
};

export const setShowQueue = (song) => {
  return [song.id];
};
