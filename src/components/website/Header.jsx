import React, { useState } from 'react';
import '../../styles/website.css';

function Header() {
  const [openPopup, setOpenPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header>
        <div className="left-header">
          <img src="src\img\face.png" alt="" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
        </div>
        <ul className={`right-header-ul ${menuOpen ? 'open' : ''}`}>
          <li><a href="/">Начало</a></li>
          <li><a onClick={() => setOpenPopup(true)}>Още нещо</a></li>
          <li><a href="/quiz">Опознай себе си</a></li>
        </ul>
      </header>

      {openPopup && (
        <div className="popup">
          <div className="popup-inner">
            <img src="src\img\x.png" alt="close button" onClick={() => setOpenPopup(false)} />
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
