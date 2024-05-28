// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Contact = () => (
  <ContactContainer>
    <h2>Contact Me</h2>
    <p>Contact details.</p>
  </ContactContainer>
);

export default Contact;
