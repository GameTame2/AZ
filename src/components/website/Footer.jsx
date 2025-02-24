import React from 'react';
import '../../styles/website.css';

function Footer() {

  return (
    <div className='footer-wrapper'>
    <footer>
        <div className="footer-nav" id="footer-nav-1">
            <a href="/">Начало</a>
            <a href="/quiz">Опознай себе си</a>
        </div>
        <div className="footer-middle">
            <img src="/images/Face_logo_black.png" alt="face" />
        </div>
        <div className="footer-nav" id="footer-nav-2">
            <a href="">История на Иван</a>
            <a href="">За нас</a>
        </div>
    </footer>
    <p>Сайтът е изготвен от Арда Халибрям и Симеон Христов - ученици в 9 клас на средно училище "Отец Паисий", гр. Кърджали</p>

    </div>
  );
}

export default Footer;