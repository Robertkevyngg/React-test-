// src/Projects.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  animation: fadeInUp 1s;
  text-align: center;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 2.5em;
  color: #333;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
`;

const ProjectItem = styled.li`
  margin-bottom: 20px;
  font-size: 1.5em;
`;

const ProjectLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #21a1f1;
    transform: scale(1.1);
  }
`;

function Projects() {
  return (
    <Section id="projects">
      <Title>Meus Projetos</Title>
      <ProjectList>
        <ProjectItem>
          <ProjectLink href="https://github.com/Robertkevyngg" target="_blank" rel="noopener noreferrer">
            Projeto 1
          </ProjectLink>
        </ProjectItem>
        <ProjectItem>
          <ProjectLink href="https://github.com/Robertkevyngg" target="_blank" rel="noopener noreferrer">
            Projeto 2
          </ProjectLink>
        </ProjectItem>
      </ProjectList>
    </Section>
  );
}

export default Projects;
