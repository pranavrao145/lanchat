import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar is-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <a className="button is-link">Logout</a>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
