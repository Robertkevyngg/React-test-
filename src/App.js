// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Theme';
import { GlobalStyles } from './global';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styled from 'styled-components';
import AnimatedBackground from './components/AnimatedBackground';
import { Link } from 'react-scroll';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  z-index: 1; /* Ensure it is above the background */
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

const ThemeToggle = styled.button`
  font-size: 1em;
  padding: 10px 20px;
  margin: 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <AnimatedBackground />
        <Container>
          <Header />
          <Content>
            <ThemeToggle onClick={themeToggler}>Toggle theme</ThemeToggle>
            <nav>
              <Link to="home" smooth={true} duration={500}>Home</Link>
              <Link to="about" smooth={true} duration={500}>About</Link>
              <Link to="projects" smooth={true} duration={500}>Projects</Link>
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home id="home" />} />
              <Route path="/about" element={<About id="about" />} />
              <Route path="/projects" element={<Projects id="projects" />} />
              <Route path="/contact" element={<Contact id="contact" />} />
            </Routes>
          </Content>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
