import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Navbar from "./navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="section">
          <div className="container">
            <Router>
              <Routes>
                <Route path="/login" element={<Login />} />
              </Routes>
            </Router>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
