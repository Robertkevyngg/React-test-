// src/Contact.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  background-color: #f7f7f7;
  animation: fadeInUp 1s;
  text-align: center;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 2.5em;
  color: #333;
`;

const Text = styled.p`
  font-size: 1.5em;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

function Contact() {
  return (
    <Section id="contact">
      <Title>Contato</Title>
      <Text>
        Você pode me encontrar nas redes sociais ou enviar um e-mail para contato@meusite.com.
      </Text>
    </Section>
  );
}

export default Contact;
