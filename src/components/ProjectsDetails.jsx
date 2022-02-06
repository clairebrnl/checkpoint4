import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProjectCards from "./ProjectCards";
import styled from "styled-components";
import axios from "axios";

const ProjectsDetails = () => {
  const [projectDetails, setProjectDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/projects/${id}`)
      .then((res) => res.data)
      .then((data) => setProjectDetails(data));
  }, [id]);

  return (
    <ProjectDetailsContainer>
      <DetailsContainer>
        {projectDetails.map((project) => (
          <ProjectCards project={project} key={project.project_name} />
        ))}
      </DetailsContainer>
    </ProjectDetailsContainer>
  );
};

const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailsContainer = styled.div`
  width: 50%;
  margin-bottom: 2em;
  text-align: center;
  justify-content: center;
  img {
    width: 80%;
    height: auto;
  }
`;

export default ProjectsDetails;
