import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Navbar from "./navbar/Navbar";
import Messages from "./messages/Messages";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
            <Router>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/chat" element={<Messages />} />
              </Routes>
            </Router>
      </React.Fragment>
    );
  }
}

export default App;
