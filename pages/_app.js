import '../styles/globals.css'
import '../styles/theme.css';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  // Check saved preference on load
  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light';
    setTheme(stored);
    document.documentElement.setAttribute('data-theme', stored);
  }, []);

  // Watch theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Component {...pageProps} theme={theme} setTheme={setTheme} />

      {/* Footer note with license info */}
      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        fontSize: '0.9rem',
        marginTop: '2rem',
        borderTop: '1px solid #ccc',
        color: 'var(--text-color)',
        backgroundColor: 'var(--bg-color)'
      }}>
        © 2025 Nisha. Recipes shared under{' '}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--text-color)', textDecoration: 'underline' }}
        >
          CC BY 4.0 License
        </a>.
      </footer>
    </>
  );
}
