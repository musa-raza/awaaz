import React from 'react';

class StreamIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllSongs();
  }

  render() {
    const SongItems = this.props.songs.map((song) => {
    return (<audio key={song.id} controls><source src={song.audio_url} type="audio/mpeg"></source></audio>);
  });
    return(
      <div className="audio-parent">
        {SongItems}
      </div>
    );
  }
}

export default StreamIndex;
