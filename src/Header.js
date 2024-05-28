// src/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #282c34;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Title>My Site</Title>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </Nav>
  </HeaderContainer>
);

export default Header;
