import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop(e) {
    debugger;
    e.preventDefault();
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="top">
      <div className="parent-div">
        <div className="img-div">
          <Link to="/stream">
            <img className="nav-logo" src="https://s3.us-east-2.amazonaws.com/awaaz-dev/logo.jpg" />
          </Link>
        </div>
          <div className="nav-home">
            <Link to="/stream">
              Home
            </Link>
          </div>
          <div className="nav-collection">
            <Link to="/collection">
              Collection
            </Link>
          </div>
          <div className="nav-search">
            <input type="search" placeholder="Search" />
          </div>
          <div className="nav-upload">
            <Link to="/upload">
              Upload
            </Link>
          </div>
          <div className="nav-profile">
            <Link to={`/users/${this.props.user}`}>{this.props.user}</Link>
          </div>
          <div className="nav-logout">
            <Link to='/' onClick={this.props.logout}>Logout</Link>
          </div>
        </div>
      </div>

    );
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { logout } from '../actions/session_actions';
//
// class NavBar extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = { open: false };
//     this.handleDrop = this.handleDrop.bind(this);
//   }
//
//   handleDrop(e) {
//     e.preventDefault();
//     this.setState({
//       open: !this.state.open
//     });
//   }
//
//   render() {
//     return (
//       <div className="parent-div">
//       <div className="sub-parent">
//       <div className="img-div">
//         <Link to="/stream">
//           <img className="nav-logo" src="https://s3.us-east-2.amazonaws.com/awaaz-dev/logo.jpg" />
//         </Link>
//       </div>
//         <div className="nav-home">
//           <Link to="/stream">
//             Home
//           </Link>
//         </div>
//         <div className="nav-collection">
//           <Link to="/collection">
//             Collection
//           </Link>
//         </div>
//         <div className="nav-search">
//           <input type="search" placeholder="Search" />
//         </div>
//         <div className="nav-upload">
//           <Link to="/upload">
//             Upload
//           </Link>
//         </div>
//         <div className="nav-dropdown">
//           <ul className= {this.props.open ? "drop-active" : "hidden"} onClick={this.handleDrop}>
//           <li><NavLink to={`/users/${this.props.user}`}>Profile</NavLink></li>
//           <li> <a onClick={this.props.logout}>Logout</a></li>
//         </ul>
//         </div>
//         </div>
//       </div>
//     );
//   }
//
// }
//
// const mapStateToProps = (state) => {
//   return {
//     user: state.session.currentUser.username
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return ({
//     logout: () => dispatch(logout())
//   });
// };
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
