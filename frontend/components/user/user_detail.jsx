import React from 'react';
import NavBar from '../navbar';
import { NavLink } from 'react-router-dom';
import StreamIndexItem from '../stream/stream_index_item';

class UserDetail extends React.Component {


  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestAUser(this.props.match.params.username);
  }

  setQueue(id) {
    this.props.setUserQueue(this.props.songs, id);
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.user === null || this.props.user.username !== nextProps.match.params.username ) {
      this.props.requestAUser(this.props.match.params.username);
    }
  }

  render() {
    if (this.props.user === null) {
      return null;
    }
    return(
      <div className="usershow-parent">
        <div className="usershow-header">
          <img className="avatar" src={this.props.user.avatar_url} />
          <span className="userheader-name">
            {this.props.user.username}
          </span>
        </div>
        <div className="user-links">
          <ul className="user-options">
            <li>All</li>
            <li>Tracks</li>
          </ul>
          <div className="usersong-parent">
            <div className="user-songs">
              {this.props.songs.map(song => <StreamIndexItem
                key={song.id}
                song={song}
                songs={this.props.songs}
                setQueue={this.setQueue.bind(this)}
                deleteSong={this.props.deleteSong.bind(this)}
                currentUser={this.props.currentUser}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
 }
export default UserDetail;


// change the user controller aciton
// redesign my state in reducer
//
