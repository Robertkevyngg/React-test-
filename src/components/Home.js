// src/components/Home.js
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Home = () => (
  <HomeContainer>
    <h2>Welcome to My Website</h2>
    <p>This is the homepage content.</p>
  </HomeContainer>
);

export default Home;
