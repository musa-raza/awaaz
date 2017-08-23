import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({
      username: "",
      password: ""
    });
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  handleGuest(e) {
    e.preventDefault();
    const user = {username: "guest", password: "123456"};
    this.props.processForm(user);
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.removeModal();
  }

  render() {
    let darken;
    if (this.props.formType) {
      darken = 'modal';
    }
  const errors = this.props.errors.map((error, idx) => <li className="errors" key={idx}>{error}</li>);
  return(
    <div className={`form${darken}`}>
      <div className="modal-hide" onClick={this.handleRemove}>
        <div className="form-div" onClick={(e) => e.stopPropagation()}>
          <form className="session-form" onSubmit={this.handleSubmit}>
            <div className="guest-div">
              <button className="guest-login" onClick={this.handleGuest}>Continue as guest</button>
            </div>
            <h2 className="modal-divide">or</h2>
            <input
              type="text"
              className="input-username"
              onChange={this.handleChange(`username`)}
              placeholder="Username"
              value={this.state.username}
            />
           <input
             type="password"
             className="input-username"
             onChange={this.handleChange(`password`)}
             placeholder="Password..."
             value={this.state.password}
           />
         <button className="session-button">{this.props.formType}</button>
         <ul>
           {errors}
         </ul>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default withRouter(SessionForm);
