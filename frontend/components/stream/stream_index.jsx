import React from 'react';
import { NavLink } from 'react-router-dom';
import StreamIndexItem from './stream_index_item';


class StreamIndex extends React.Component {

  constructor(props) {
    super(props);
    this.setQueue = this.setQueue.bind(this);
  }

  componentDidMount() {
    this.props.requestAllSongs();
  }

  setQueue(id) {
    this.props.setQueue(this.props.songs, id);
  }

  render() {
    const SongItems = this.props.songs.map((song) => {
    return <StreamIndexItem setQueue={this.setQueue.bind(this)} song={song} songs={this.props.songs} key={song.id} />;
  });
    return(
      <div className="audio-parent">
        <div className="headings-div">
          <div className="index-div">
          <div>
            <NavLink className="stream-heading" to='/stream'> Stream</NavLink>
          </div>
          <div>
            <NavLink className="stream-heading" to='/charts'>Charts</NavLink>
          </div>
          <div>
            <NavLink className="stream-heading" to='/discover'>Discover</NavLink>
          </div>
        </div>
        <div className="stream-index">
          <div className="stream-text">
            <span>Hear the latest posts from the Awaaz community:</span>
          </div>
          <div className="audio-div">
            {SongItems.reverse()}
          </div>
      </div>
      </div>
    </div>
    );
  }
}

export default StreamIndex;


// (<audio key={song.id} controls><source src={song.audio_url} type="audio/mpeg"></source></audio>)
