import React from 'react';
import { link } from 'react-router-dom'

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-parent">
        <header role="banner">
          <div class ="header-inner">
            <nav className="nav-bar">
              <ul className="left-bar">
                <li className="logo">
                  <Link to="/stream">
                    <img src="app/assets/images/logo.jpg" />
                  </Link>
                </li>
                <li className="nav-home">
                  <Link to="/stream">
                    Home
                  </Link>
                </li>
                <li className="nav-collection">
                  <Link to="/collection">
                    Collection
                  </Link>
                </li>
              </ul>
              <ul className="search-bar">
                <input type="search" placeholder="Search"/>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }

}
