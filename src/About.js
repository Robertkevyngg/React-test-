// src/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 60px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const About = () => (
  <AboutContainer>
    <Title>About Me</Title>
    <Content>
      Welcome to my website! I'm a passionate developer with a love for creating beautiful and functional web applications.
    </Content>
  </AboutContainer>
);

export default About;
