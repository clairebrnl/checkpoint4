import React from "react";
import styled from "styled-components";

const ProjectCards = ({ project }) => (
  <ProjectContainer>
    <h1>{project.project_name}</h1>
    <p>{project.description}</p>
    <ProjectImage>
      <img src={project.image} alt="project-logo" />
    </ProjectImage>
  </ProjectContainer>
);

const ProjectContainer = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  img {
    height: 20px;
    width: 40px;
  }
`;

const ProjectImage = styled.div`
  height: 20px;
  width: 40px;
`;

export default ProjectCards;
