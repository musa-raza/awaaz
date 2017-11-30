import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/session_form_container';

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

  componentDidMount () {
    this.props.removeModal();
  }


  handleSignup(e) {
    e.preventDefault();
    this.props.signupModal();
  }

  render() {
    let form;
    if (this.props.modalBool) {
      form = <SessionFormContainer formType={this.props.formType} />;
    } else {
      form = null;
    }
      return(
        <div className="father-div">
        <div className="main-div">
          <div className="login-div">
            <div className="logo"></div>
            <button onClick={this.handleLogin} className="op-button">
              Sign In
            </button>
            <button onClick= {this.handleSignup}className="signup-button">
              Create account
            </button>
          </div>
          <h2 className="login-heading">Connect on Awaaz</h2>
            <div className="login-text">Discover, stream and share a constantly expanding mix of music from emerging and major artists all over the world.
            </div>
            {form}
          </div>
            <div className="login-peak">
              <div className="login-parentdivs">
              <div className="login-search">
                
              </div>
              <div className="loginheading-div">
                <h2 className="loginheading-text">Here's what's trending in the Awaaz community</h2>
              </div>
              <div className="songs-div">
                <div className="loginalbumart-div">
                  <img src="https://s3.us-east-2.amazonaws.com/awaaz-dev/The-Weeknd-Often-Kygo-Remix.jpg
" />
                <span className="loginalbum-text">Kygo</span>
                </div>
                <div className="loginalbumart-div">
                  <img src="https://s3.us-east-2.amazonaws.com/awaaz-dev/gryffin+.jpg
" />
                  <span className="loginalbum-text">Gryffin</span>
                </div>
                <div className="loginalbumart-div">
                  <img src="https://s3.us-east-2.amazonaws.com/awaaz-dev/junoon-logo-primary.jpg
" />
                <span className="loginalbum-text">Junoon</span>
                </div>
                <div className="loginalbumart-div">
                  <img src="https://s3.us-east-2.amazonaws.com/awaaz-dev/klangkarusell.jpg
" />
                  <span className="loginalbum-text">Klangkarusell</span>
                </div>
                <div className="loginalbumart-div">
                  <img src="https://s3.us-east-2.amazonaws.com/awaaz-dev/klingande.jpg" />
                  <span className="loginalbum-text">Klingande</span>
                </div>
                <div className="loginalbumart-div">
                  <img src="https://s3.us-east-2.amazonaws.com/awaaz-dev/kygo-no-diggity.jpg
" />
                <span className="loginalbum-text">Kygo x Ed Sheeran</span>
                </div>
                <div className="loginalbumart-div">
                  <img src="https://s3.us-east-2.amazonaws.com/awaaz-dev/m83.jpg
" />
                <span className="loginalbum-text">M83 x Kanye West</span>
                </div>
                <div className="loginalbumart-div">
                  <img src="https://s3.us-east-2.amazonaws.com/awaaz-dev/matoma+.jpg
" />
                <span className="loginalbum-text">Matoma x Notorious BIG</span>
                </div>
                <div className="loginalbumart-div">
                  <img src="https://s3.us-east-2.amazonaws.com/awaaz-dev/matoma+2.jpg
" />
                <span className="loginalbum-text">Matoma x NWA</span>
                </div>
              </div>
            </div>
            </div>
        </div>
      );
    }
  }


export default Login;
