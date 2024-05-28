// src/SocialLinks.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-top: 40px;
  animation: fadeIn 2s;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  font-size: 1.5em;
`;

const Link = styled.a`
  color: #61dafb;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #21a1f1;
    transform: scale(1.1);
  }
`;

function SocialLinks() {
  return (
    <Container>
      <Title>Siga-me nas redes sociais:</Title>
      <List>
        <ListItem>
          <Link href="https://github.com/Robertkevyngg" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://instagram.com/seu-usuario" target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>
        </ListItem>
      </List>
    </Container>
  );
}

export default SocialLinks;
