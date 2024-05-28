// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  background: #282c34;
  color: white;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Robert Gomes. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
