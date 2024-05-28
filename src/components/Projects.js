// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectItem = styled.li`
  margin: 10px 0;
  font-size: 1.5em;
`;

const ProjectLink = styled.a`
  color: #007b;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056;
  }
`;

const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <ProjectList>
        <ProjectItem>
          <ProjectLink href="https://github.com/Robertkevyngg/cell-quest-/tree/main/cell_quests" target="_blank" rel="noopener noreferrer">
            Projeto, esse projeto foi criado para um game educativo, e ainda esta em processo de produçao...
          </ProjectLink>
        </ProjectItem>
        <ProjectItem>
          <ProjectLink href="https://github.com/seu-usuario/projeto2" target="_blank" rel="noopener noreferrer">
           
          </ProjectLink>
        </ProjectItem>
      </ProjectList>
    </div>
  );
};

export default Projects;
