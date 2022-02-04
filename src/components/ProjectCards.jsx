import React from "react";
import styled from "styled-components";

const ProjectCards = ({ project }) => (
  <ProjectContainer>
    <Content>
      <Timeline>
        <ContentLeft>
          <h1>{project.project_name}</h1>
          <p>{project.description}</p>
        </ContentLeft>
        <ImageContainer>
          <img src={project.image} alt="project-logo" />
        </ImageContainer>
      </Timeline>
    </Content>
  </ProjectContainer>
);

const ContentLeft = styled.div``;

const Timeline = styled.div``;

const Content = styled.div``;

const ProjectContainer = styled.div``;

const ImageContainer = styled.div``;

export default ProjectCards;
