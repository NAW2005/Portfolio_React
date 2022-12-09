import React from "react";
import Contact from "./pages/Contact";
import Nav from "./pages/Nav";
import Pageone from "./pages/Pageone";
import Pagethree from "./pages/Pagethree";
import Pagetwo from "./pages/Pagetwo";
import Skill from "./pages/Skill";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Pageone />
      <Pagetwo />
      <Pagethree />
      <Skill />
      <Contact />
    </div>
  );
};

export default App;
