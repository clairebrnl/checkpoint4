import React from "react";
import styled from "styled-components";

const FrameworksCards = ({ framework }) => (
  <FrameworkContainer>
    <p>{framework.framework_name}</p>
  </FrameworkContainer>
);

const FrameworkContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export default FrameworksCards;
