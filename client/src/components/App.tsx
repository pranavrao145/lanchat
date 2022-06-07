import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Navbar from "./navbar/Navbar";
import Chat from "./chat/Chat";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
            <Router>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </Router>
      </React.Fragment>
    );
  }
}

export default App;
