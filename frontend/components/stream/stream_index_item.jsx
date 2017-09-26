import React from 'react';
import { Link } from 'react-router-dom';
import PlayButton from '../play_button';
import Moment from 'react-moment';
import 'moment-timezone';
import ReactLoading from 'react-loading';
import Wavesurfer from 'react-wavesurfer';

class StreamIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.wavesurfer = null;
    this.state = {
      playing: false,
      pos: 0,
      volume: 0
    };
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
    this.handleSurfClick = this.handleSurfClick.bind(this);
    }



    componentWillReceiveProps(newProps) {
      const audio = document.getElementById("audio");
      if (newProps.status === "playing" && newProps.currentTrack === newProps.song.id && newProps.time) {
    this.setState({playing: true, volume: 0, pos: newProps.time});
  } else if (newProps.status === "paused" && newProps.currentTrack === newProps.song.id) {
    this.setState({playing: false, volume: 0, pos: audio.currentTime});
  }
    else if (newProps.status === "playing" && newProps.currentTrack != newProps.song.id) {
        this.setState({playing: false, volume: 0, pos: 0});
    }
    }

    handleTogglePlay() {
      this.setState({
        playing: !this.state.playing
      });
    }

    handlePosChange(e) {
      this.setState({
        pos: e.originalArgs[0]
      });
    }


    handleSurfClick(e) {
      const audio = document.getElementById("audio");
      let clickpos = (e.clientX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.clientWidth;
      audio.currentTime = clickpos * audio.duration;
    }



  render() {
    let dateFormat = this.props.song.created_at;
    let delButton;
    let editButton;
    let loader = this.props.loaded;
    if (!loader) {
    return (
      <div className="play-parent">
        <ReactLoading type="bars" color="orange" height='50px' width='50px'  />
      </div>
    );
    } else {
      if (this.props.song != undefined && this.props.currentUser.id === this.props.song.user_id) {
        delButton =  <i className="fa fa-trash" aria-hidden="true" onClick={this.props.deleteSong.bind(this, this.props.song.id)}></i>;
          editButton =  <Link to={`/songs/${this.props.song.id}/edit`}>
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </Link>;
        }
          return(
            <div className="play-audio-parent">
              <div className="play-parent">
                <div className="artist-info-div">
                  <div className="artist-img-div">
                    <Link to={`/users/${this.props.song.user_name}`}>
                      <img className="play-artist-pic" src={this.props.song.user_avatar_url}></img>
                    </Link>
                  </div>
                  <div className="artist-post-info">
                    <Link to={`/users/${this.props.song.user_name}`}>{this.props.song.user_name}</Link>
                    <span>posted a track <Moment fromNow>{dateFormat}</Moment>:</span>
                  </div>
                </div>
                <div className="artistpost-songart-div">
                  <div className="albumart-div">
                    <img src={this.props.song.image_url}></img>
                    <PlayButton
                      id={this.props.song.id}
                      name={this.props.song.user_name} title={this.props.song.title}
                      songId={this.props.song.id}
                      setQueue={this.props.setQueue.bind(this)}
                      />
                  </div>
                </div>
              </div>
              <div className="waveform-div" onClick={this.handleSurfClick}>
                <Wavesurfer
                  audioFile={this.props.song.audio_url}
                  onPosChange={this.handlePosChange}
                  playing={this.state.playing}
                  pos={this.state.pos}
                  onClick={this.handleSurfClick}
                  volume='0'
                  options={{waveColor: '#8c8c8c',
                    progressColor:'#f50',
                    barWidth: 2,
                    height: 80}}

                    ref={(Wavesurfer) => {this.wavesurfer = Wavesurfer;}}
                    />
                </div>
              <div className="delbutton-div">
                {editButton}
                {delButton}
              </div>
              <div>

              </div>
            </div>
          );
        }
      }
}



export default StreamIndexItem;





//
// <div className="song-info-div">
//   {PlayButton}
// </div>
