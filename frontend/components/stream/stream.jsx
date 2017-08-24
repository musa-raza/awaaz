import React from 'react';
import NavBar from '../navbar';

class Stream extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="logout-div">
        <NavBar props={this.props} />
        <button className="logout-button" onClick={() => this.props.logout()}>Logout</button>
      </div>
    );
  }
}

export default Stream;
