import React from 'react';
import { Link } from 'react-router-dom';
import PlayButton from '../play_button';
import Moment from 'react-moment';
import 'moment-timezone';


class StreamIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    let dateFormat = this.props.song.created_at;
    return(
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
            />
         </div>

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
