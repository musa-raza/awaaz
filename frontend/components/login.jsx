import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from './session_form_container';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {form: ''};
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    this.props.loginModal();
  }

  handleSignup(e) {
    e.preventDefault();
    this.props.signupModal();
  }

  render() {
    let darken;
    let form;
    if (this.props.modalBool) {
      form = <SessionFormContainer />;
      darken = 'modal';
    } else {
      form = null;
    }
    if (this.props.currentUser) {
      return(
        <div className={`form${darken}`}>
          <h3> Welcome {this.props.currentUser.username}</h3>
          <button className="logout-button" onClick={() => this.props.logout()}>Logout</button>
        </div>
      );
    }
    else {
      return(
        <div>
          <h2>Connect on Awaaz</h2>
            <div className="login-text">Discover, stream and share a constantly expanding mix of music from emerging and major artists all over the world.</div>
            {form}
          <button onClick={this.handleLogin} className="session-button">
            Sign In
          </button>
          <button onClick= {this.handleSignup}className="session-button">
            Create account
          </button>
          </div>
      );
    }
  }
}

export default Login;
