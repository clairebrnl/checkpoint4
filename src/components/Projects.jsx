import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectCards from "./ProjectCards";
import axios from "axios";
import Frameworks from "./Frameworks";

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
      <Search>
        <div onChange={onChangeValue}>
          <input type="search" name="framework" />
          <FrameworkContainer>
            <Frameworks />
          </FrameworkContainer>
        </div>
      </Search>
      {projects
        .filter((project) => project.framework_name.includes(sortedProjects))
        .map((project) => (
          <ProjectCards project={project} key={project.project_name} />
        ))}
    </div>
  );
};

const FrameworkContainer = styled.div`
  width: 100%;
`;

const Search = styled.div`
  margin: 26px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Projects;
