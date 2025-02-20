import React from 'react';
import '../../styles/website.css';

function Footer() {

  return (
    <footer>
        <div className="footer-nav" id="footer-nav-1">
            <a href="/">Начало</a>
            <a href="/quiz">Опознай себе си</a>
        </div>
        <div className="footer-middle">
            <img src="src\img\logo.png" alt="logo" />
        </div>
        <div className="footer-nav" id="footer-nav-2">
            <a href="">Физиономия</a>
            <a href="">Полезни връзки</a>
        </div>
    </footer>
  );
}

export default Footer;