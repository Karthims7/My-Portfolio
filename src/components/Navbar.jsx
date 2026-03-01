import React, { useState, useEffect } from 'react';
import { Terminal, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check local storage on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Force dark as default if nothing is saved
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
      transition: 'all 0.3s ease',
      borderBottom: scrolled ? '1px solid rgba(0, 240, 255, 0.2)' : 'none'
    }} className={scrolled ? 'glass-panel' : ''}>
      <div className="nav-content" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--brand-text)'
        }}>
          <Terminal size={24} />
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '1px' }}>karthi_devops</span>
        </div>

        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
          <a href="#about">~/about</a>
          <a href="#experience">~/experience</a>
          <a href="#skills">~/skills</a>
          <a href="#certifications">~/certs</a>
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              borderRadius: '50%',
              transition: 'background-color 0.3s ease'
            }}
            aria-label="Toggle theme"
            className="theme-toggle-btn"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
