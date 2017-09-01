import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleDrop = this.handleDrop.bind(this);
    this.setFalse = this.setFalse.bind(this);
  }

  handleDrop(e) {
    e.preventDefault();
    this.setState({
      open: !this.state.open
    });
  }


  setFalse(){
    this.setState({
      open: false
    });
  }

   render() {
    return (
      <div className="top">
      <div className="parent-div">
        <div className="img-div">
          <NavLink to="/stream">
            <img className="nav-logo" src="https://s3.us-east-2.amazonaws.com/awaaz-dev/logo.jpg" />
          </NavLink>
        </div>
          <div className="nav-home">
            <NavLink onClick={this.setFalse} to="/stream" >
              Home
            </NavLink>
          </div>
          <div className="nav-collection">
            <NavLink onClick={this.setFalse} to="/collection">
              Collection
            </NavLink>
          </div>
          <div className="nav-search">
            <input type="search" placeholder="Search" />
          </div>
          <div className="nav-upload">
            <NavLink onClick={this.setFalse} to="/upload">
              Upload
            </NavLink>
          </div>
          <div className="nav-profile">
            <div onClick={this.handleDrop} className="name">{this.props.user.username}</div><div className="navimg-div"><img onClick={this.handleDrop} src={this.props.user.avatar_url}/>
            <div className="dropdown-div">
              <ul className={this.state.open ? "active" : "hidden"}>
                <li className="dropdown-li" onClick={this.handleDrop}>
                  <NavLink to={`/users/${this.props.user.username}`}>
                    Profile
                  </NavLink>
                </li>
                <li className="dropdown-li" onClick={this.handleDrop}>
                  <a onClick={this.logout} >Logout</a>
                </li>
              </ul>
            </div>
            </div>
          </div>
          <div className="nav-logout">
            <a onClick={this.props.logout}>Logout</a>
          </div>
        </div>
      </div>

    );
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser
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
