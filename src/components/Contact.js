// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactItem = styled.li`
  margin: 10px 0;
  font-size: 1.5em;
`;

const ContactLink = styled.a`
  color: #007b;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056;
  }
`;

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <ContactList>
        <ContactItem>
          <ContactLink href="https://instagram.com/seu-usuario" target="_blank" rel="noopener noreferrer">
            Instagram
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLink href="https://github.com/Robertkevyngg" target="_blank" rel="noopener noreferrer">
            GitHub
          </ContactLink>
        </ContactItem>
      </ContactList>
    </div>
  );
};

export default Contact;
