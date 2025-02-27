import React from 'react';
import '../../styles/website.css';
import { Link } from "react-router-dom";

function Footer() {

  return (
    <div className='footer-wrapper'>
    <footer>
        <div className="footer-nav" id="footer-nav-1">
            <Link to="/">Начало</Link>
            <Link to="https://forms.gle/ZhDP2MB2RWyPcwK96">Разкажи ми твоята история</Link>
        </div>
        <div className="footer-middle">
            <img src="/images/Face_logo_black.png" alt="face" />
        </div>
        <div className="footer-nav" id="footer-nav-2">
            <Link to="/story">История на Иван</Link>
            <Link to="/about">За нас</Link>
        </div>
    </footer>
    <p>Сайтът е изготвен от Арда Халибрям и Симеон Христов - ученици в 9 клас на Средно училище "Отец Паисий", гр. Кърджали</p>

    </div>
  );
}

export default Footer;