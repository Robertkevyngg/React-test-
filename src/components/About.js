// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const About = () => (
  <AboutContainer>
    <h2>About Me</h2>
    <p>Information about me.</p>
  </AboutContainer>
);

export default About;
