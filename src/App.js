import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects";
import GlobalStyle from "./components/styles/globalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Projects />
    </div>
  );
};

export default App;
