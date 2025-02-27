import React, { useState } from 'react';
import '../../styles/website.css';
import { Link } from "react-router-dom";

function Header() {
  const [openPopup, setOpenPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header>
        <div className="left-header">
          <img src="/images/Face_logo_black.png" alt="" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
        </div>
        <ul className={`right-header-ul ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/">Начало</Link></li>
          <li><a onClick={() => setOpenPopup(true)}>Още нещо</a></li>
          <li><Link to="/quiz">Опознай себе си</Link></li>
        </ul>
      </header>

      {openPopup && (
        <div className="popup">
          <div className="popup-inner">
            <img src="/images/x.png" alt="close button" onClick={() => setOpenPopup(false)} />
            <p>Физиогномиката е наука за изучаване на лицето и изразите му с цел разпознаване на характера и личността на човека. Тази практика има дълга история и се свързва с древните цивилизации от Китай, Гърция и Египет. <br />
Според физиогномиката лицето е като "карта" на вътрешния свят на човека, а чертите на човешките лица са уникални: формата на устните, носа, челото и очите могат да разкрият тайни за характера, темперамента, поведението и заложбите на всеки. Широкото чело например се счита за признак на буден ум и интелигентност или склонност към анализиране на ситуации. По-голямата форма на устата се смята за знак на комуникативност и изразителност. Малките и присвити очи се тълкуват като индикатор за скритост или предпазливост. 
Разбира се, физиогномиката не е точна наука, а по-скоро един от начините за интерпретация на поведението на чисто физическо ниво. Тя е била използвана от философи и лекари през различни исторически периоди, но с развитието на психологията и други дисциплини, теориите ѝ са поставени под съмнение. Въпреки това остава интересна и се използва в областта на психологията и криминологията, в опит да се разкрият и осмислят личностни черти на човека чрез физическите му показатели. <br />
Физиогномиката обаче трябва да се приеме с доза предпазливост. Не бива да се забравя, че външността невинаги разкрива вътрешния свят на личността. Хората са сложни и противоречиви и анализирането им не е лесен процес, унифициран само въз основа на физическите им черти.</p>
<img src="/images/x.png" alt="close button" onClick={() => setOpenPopup(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
