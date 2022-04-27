import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./general/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
