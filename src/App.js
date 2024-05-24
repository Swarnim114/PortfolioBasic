import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Education':
        return <Education />;
      case 'Skills':
        return <Skills />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><button onClick={() => setCurrentPage('Home')}>Home</button></li>
            <li><button onClick={() => setCurrentPage('About')}>About</button></li>
            <li><button onClick={() => setCurrentPage('Projects')}>Projects</button></li>
            <li><button onClick={() => setCurrentPage('Education')}>Education</button></li>
            <li><button onClick={() => setCurrentPage('Skills')}>Skills</button></li>
            <li><button onClick={() => setCurrentPage('Contact')}>Contact</button></li>
          </ul>
        </nav>
      </header>
      {renderPage()}
    </div>
  );
}

export default App;
