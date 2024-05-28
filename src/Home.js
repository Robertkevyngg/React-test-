// src/Home.js
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.section`
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

const Home = () => (
  <HomeContainer>
    <Title>Home</Title>
    <Content>
      Welcome to my website! This is the homepage.
    </Content>
  </HomeContainer>
);

export default Home;
