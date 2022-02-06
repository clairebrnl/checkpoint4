import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects";
import GlobalStyle from "./components/styles/globalStyle";
import ProjectsDetails from "./components/ProjectsDetails";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/:id" element={<ProjectsDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
