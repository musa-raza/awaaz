export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const SET_QUEUE = 'SET_QUEUE';
export const UPDATE_QUEUE = 'UPDATE_QUEUE';
export const SET_USER_QUEUE = 'SET_USER_QUEUE';
export const REWIND_SONG = 'REWIND_SONG';
export const UPDATE_TIME = 'UPDATE_TIME';

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
  const rewindQueue = [];
  if ( songs instanceof Array) {
    songs.reverse().forEach((song) => {
      if (song.id <= currentTrackId) {
        queue.push(song.id);
      } else {
        rewindQueue.push(song.id);
      }
    });
  } else {
    queue.push(songs.id);
  }


  return({
    type: SET_QUEUE,
    queue,
    rewindQueue
  });
};

export const updateQueue = () => {
  return({
    type: UPDATE_QUEUE,
  });
};

export const setUserQueue = (songs, currentTrackId) => {
  const queue = [];
  const rewindQueue = [];
  songs.forEach((song) => {
    if (song.id <= currentTrackId) {
      queue.push(song.id);
    } else {
      rewindQueue.push(song.id);
    }
  });
  return({
    type: SET_USER_QUEUE,
    queue,
    rewindQueue
  });
};

export const setShowQueue = (song) => {
  return [song.id];
};

const prependSong = (id, array) => {
  const newArr = array.slice();
  newArr.unshift(id);
  return newArr;
};

export const rewindSong  = (array) => {
  const rewindedSongId = array[0] + 1;
  const queue = prependSong(rewindedSongId, array);
  return({
    type: REWIND_SONG,
    queue
  });
};

export const updateTime = (time) => {
  return({
    type: UPDATE_TIME,
    time
  });
};
