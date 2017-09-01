import React from 'react';
import { Link } from 'react-router-dom';
import PlayButton from '../play_button';
import Moment from 'react-moment';
import 'moment-timezone';
import ReactLoading from 'react-loading';


class StreamIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }


  // componentDidMount() {
  //   <ReactLoading type={bars} color={orange} height='667' width='375' delay='2000'
  // }


  render() {
    let dateFormat = this.props.song.created_at;
    let delButton;
    let editButton;
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
      <div className="delbutton-div">
         {editButton}
         {delButton}
      </div>
    </div>
  );
  }
}



export default StreamIndexItem;





//
// <div className="song-info-div">
//   {PlayButton}
// </div>
