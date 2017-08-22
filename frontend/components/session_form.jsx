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

  render() {
    debugger
  const errors = this.props.errors.map((error, idx) => <li className="errors" key={idx}>{error}</li>);
  return(
    <div>
      <h1>{this.props.formType}</h1>
        <ul>
          {errors}
        </ul>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={this.handleChange(`username`)}
          value={this.state.username}
        />
       <label htmlFor="password">Password</label>
       <input
         type="password"
         id="password"
         onChange={this.handleChange(`password`)}
         value={this.state.password}
       />
      <button>{this.props.formType}</button>
      </form>
    </div>
    );
  }
}

export default withRouter(SessionForm);
