import React from 'react';


class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div>
          <h3> Welcome {this.props.currentUser.username}</h3>
          <button onClick={() => this.props.logout()}>Logout</button>
        </div>
      );
    }
    else {
      return(
        <div>
          <button className="session-button">Sign in</button>
          <button className="session-button">Create account</button>
        </div>
      );
    }
  }
}

export default Login;
