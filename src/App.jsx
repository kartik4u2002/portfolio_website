import React from "react";
import { Outlet} from "react-router-dom";
import Nav from "./component/nav";
import Landing from "./component/Landing";
import Slide from "./component/Slide";
import Cards from "./component/Cards";
import Download from "./component/Download";
import Foot from "./component/Foot";
import About from "./component/About";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="w-screen min-h-screen bg-zinc-900 text-white">
          <Nav />
          <Landing />
          <Slide />
          <Cards />
          <Download />
          <About />
          <Foot />
        </div>
      </div>
    </>
  );
}
export default App;
