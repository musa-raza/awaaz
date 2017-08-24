import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-parent">
        <ul className="nav-bar">
          <li className="nav-logo">
            <Link to="/stream">
              <img src="https://s3.us-east-2.amazonaws.com/awaaz-dev/logo.jpg" />
            </Link>
          </li>
          <li>
            <Link to="/stream">
              Home
            </Link>
          </li>
          <li>
            <Link to="/collection">
              Collection
            </Link>
          </li>
          <li className="nav-search">
            <input type="search" placeholder="Search" />
          </li>
          <li>
            <Link to="/upload">
              Upload
            </Link>
          </li>
        </ul>
      </div>
    );
  }

}


// <ul className="dropdown-menu">
//   <li className="dropdown-menu-item">
//     <Link to="/users/:username">
//       Profile
//     </Link>
//   </li>
//   <li className="dropdown-menu-item">
//     <Link to="/discover">
//       Disover
//     </Link>
//   </li>
//   <li className="dropdown-menu-item">
//     <Link to="/charts">
//       Charts
//     </Link>
//   </li>
//   <li className="dropdown-menu-item">
//     <Link to="/">
//       Logout
//     </Link>
// <nav className="nav-bar">
//   <ul className="left-bar">
//     <li className="logo">
//       <Link to="/stream">
//         <img src="app/assets/images/logo.jpg" />
//       </Link>
//     </li>
//     <li className="nav-home">
//       <Link to="/stream">
//         Home
//       </Link>
//     </li>
//     <li className="nav-collection">
//       <Link to="/collection">
//         Collection
//       </Link>
//     </li>
//   </ul>
//   <ul className="search-bar">
//     <input type="search" placeholder="Search"/>
//   </ul>
//   <ul className="nav-right">
//     <li className="Upload">
//       <Link to="upload">
//         Upload
//       </Link>
//     </li>
//     <li className="nav-user">
//       User
//         </li>
//       </ul>
// </nav>

export default NavBar;
