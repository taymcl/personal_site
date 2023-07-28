import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  if (currentIndex < text.length) {
    const timeout = setTimeout(() => {
      setCurrentText(prevText => prevText + text[currentIndex]);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }
}, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <div className="navbar-brand logo">
            <Typewriter text="Hello World! I am Taylor McLean" delay={200} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
