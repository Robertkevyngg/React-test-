// src/components/AnimatedBackground.js
import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background: linear-gradient(270deg, #ff7f50, #1e90ff);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure it is behind all other elements */

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const AnimatedBackground = () => <Background />;

export default AnimatedBackground;
