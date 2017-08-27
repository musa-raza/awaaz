import React from 'react';
import { Link } from 'react-router-dom';
import PlayButton from '../play_button';


class StreamIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return(
    <div className="play-parent">
      <div className="artist-info-div">
          <div className="artist-img-div">
            <Link to={`/users/${this.props.user.user}`}>
            <img className="play-artist-pic" src={this.props.user.avatar_url}></img>
            </Link>
          </div>
          <div className="artist-post-info">
            <Link to={`/users/${this.props.user.user}`}>{this.props.user.user}</Link>
            <span>posted a track:</span>
          </div>
        </div>
        <div className="artistpost-songart-div">
          <div className="albumart-div">
           <img src={this.props.song.image_url}></img>
         </div>
        </div>

      <div>
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
