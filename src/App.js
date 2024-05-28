// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './global';
import Header from './Header';
import About from './About';
import Home from './Home'; // Certifique-se de que este componente existe

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Header />
        <button onClick={themeToggler}>Toggle theme</button>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Adicione outras rotas aqui */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
