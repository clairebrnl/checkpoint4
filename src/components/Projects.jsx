import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectCards from "./ProjectCards";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [sortedProjects, setSortedProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects-details")
      .then((res) => res.data)
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onChangeValue = (e) => {
    setSortedProjects(e.target.value);
  };

  return (
    <div>
      <div onChange={onChangeValue}>
        <input type="radio" value="React" name="framework" />
        <input type="radio" value="Express" name="framework" />
        <input type="radio" value="Node" name="framework" />
      </div>
      {projects
        .filter((project) => project.framework_name.includes(sortedProjects))
        .map((project) => (
          <ProjectCards project={project} key={project.name} />
        ))}
    </div>
  );
};

export default Projects;
