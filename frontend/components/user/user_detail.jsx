import React from 'react';
import NavBar from '../navbar';
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
        </div>
        <div className="usershow-avatar"></div>
      </div>
    );
  }
 }
export default UserDetail;


// change the user controller aciton
// redesign my state in reducer
//
