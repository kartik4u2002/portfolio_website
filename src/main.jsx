import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Landing from "./component/Landing";
import About from "./component/About";
import Download from "./component/Download";
import BubbleGame from "./component/Bubble";
import Root from "./component/root";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/home" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Download />} />
          {/* Define more routes as needed */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);