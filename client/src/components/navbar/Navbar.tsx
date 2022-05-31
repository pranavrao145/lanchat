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
          <div className="navbar-brand">
            <a className="navbar-item">
              <h1 className="is-size-5 has-text-weight-bold">LANChat</h1>
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
