import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div>
          <h3> Welcome {this.props.currentUser.username}</h3>
          <button className="logout-button" onClick={() => this.props.logout()}>Logout</button>
        </div>
      );
    }
    else {
      return(
        <div>
          <button className="session-button">
            <Link className="login-link" to="/login">Sign In</Link>
          </button>
          <button className="session-button">
            <Link className="login-link" to="/signup">Create account</Link>
          </button>
          </div>
      );
    }
  }
}

export default Login;
