import React from 'react';

class StreamIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    debugger
    return(
    <div className="play-parent">
      <div className="artist-info-div">
        <div className="artist-img-div">
          <img className="play-artist-pic" src={this.props.user.avatar_url}></img>
        </div>
        <div className="artist-post-info">
          {this.props.user.username} posted a track:
        </div>
      </div>
      <div className="flex-row-div">
      </div>
    </div>
  );
  }
}



export default StreamIndexItem;
