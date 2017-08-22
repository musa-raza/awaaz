import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from './session_form_container';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {form: ''};
  }

  handleClick(input) {
    return (e) => {
      e.preventDefault();
      this.setState({form: input});
      this.props.receiveModal();
    };
  }

  render() {
    let form;
    if (this.props.modalBool) {
      <SessionFormContainer form={this.state.form} />;
    } else {
      form = null;
    }
    debugger
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
          <h2>Connect on Awaaz</h2>
            <div className="login-text">Discover, stream and share a constantly expanding mix of music from emerging and major artists all over the world.</div>
            {form}
          <button onClick={this.handleClick('login')} className="session-button">
            Sign In
          </button>
          <button onClick= {this.handleClick('signup')}className="session-button">
            Create account
          </button>
          </div>
      );
    }
  }
}

export default Login;
