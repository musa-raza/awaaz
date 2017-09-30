import React from 'react';
import { NavLink } from 'react-router-dom';
import StreamIndexItem from './stream_index_item';


class StreamIndex extends React.Component {


  constructor(props) {
    window.scrollTo(0, 0);
    super(props);
    this.setQueue = this.setQueue.bind(this);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    const orig = this;
    this.props.requestAllSongs()
    .then(setTimeout(() => orig.setState({
      loaded: true
    }), 1500));
    this.setState({
      loaded: false
    });
  }

  setQueue(id) {
    this.props.setQueue(this.props.songs, id);
  }

  render() {
    const SongItems = this.props.songs.map((song) => {
          return <StreamIndexItem setQueue={this.setQueue.bind(this)}
            song={song}
            songs={this.props.songs}
            key={song.id}
            currentUser={this.props.currentUser}
            deleteSong={this.props.deleteSong.bind(this)}
            loaded={this.state.loaded}
            status={this.props.status}
            currentTrack={this.props.currentTrack}
            time={this.props.time}
            likes={song.like_ids}
            createLike={this.props.createLike.bind(this)}
            deleteLike={this.props.deleteLike.bind(this)}
            />;
  });
    return(
      <div className="audio-parent">
        <div className="headings-div">
          <div className="index-div">
          <div>
            <NavLink className="stream-heading" to='/stream'> Stream</NavLink>
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
