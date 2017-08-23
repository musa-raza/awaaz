import React from 'react';

class Stream extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="logout-div">
        <button className="logout-button" onClick={() => this.props.logout()}>Logout</button>
      </div>
    );
  }
}

export default Stream;
