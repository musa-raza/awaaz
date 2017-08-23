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
    let darken;
    if (this.props.formType) {
      darken = 'modal';
    }
  const errors = this.props.errors.map((error, idx) => <li className="errors" key={idx}>{error}</li>);
  return(
    <div className={`form${darken}`}>
      <div className="form-div">
        <form className="session-form"onSubmit={this.handleSubmit}>
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
        </form>
        <ul>
          {errors}
        </ul>
      </div>
    </div>
    );
  }
}

export default withRouter(SessionForm);