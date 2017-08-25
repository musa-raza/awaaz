import React from 'react';
import NavBar from '../navbar';
import { NavLink } from 'react-router-dom';
class UserDetail extends React.Component {


  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestAUser(this.props.match.params.username);
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
        </div>
      </div>
    );
  }
 }
export default UserDetail;


// change the user controller aciton
// redesign my state in reducer
//
