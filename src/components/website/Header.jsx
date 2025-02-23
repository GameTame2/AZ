import React, { useState } from 'react';
import '../../styles/website.css';

function Header() {

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
    <header>
        <div className="left-header">
            <img src="src\img\face.png" alt="" />
        </div>
        <div className="right-header">
            <ul className="right-header-ul">
                <li><a href="/">Начало</a></li>
                <li><a onClick={() => setOpenPopup(true)}>Още нещо</a></li>
                <li><a href="/quiz">Опознай себе си</a></li>
            </ul>
        </div>
    </header>

    {
      openPopup &&
      <div className="popup">
        <div className="popup-inner">
          <img src="src\img\x.png" alt="close button" onClick={() => setOpenPopup(false)}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat mi, luctus vel eros non, cursus tristique neque. Vivamus aliquet volutpat lacus, ac fermentum lacus pulvinar eget. Phasellus vulputate vehicula magna id semper. Nullam vitae tincidunt urna, id efficitur nunc. Nunc sapien enim, posuere ut faucibus at, molestie id felis. Suspendisse mi quam, mattis quis varius ac, tincidunt vel tortor. Vivamus est sem, interdum molestie laoreet sit amet, aliquet at tortor. Vestibulum tincidunt purus lorem, ac pellentesque tortor aliquet sed. Integer felis mauris, ornare ac pulvinar vel, faucibus sit amet nisi. Quisque et lorem sed orci rutrum sodales. Vestibulum dignissim convallis enim, non lacinia neque elementum a. Nulla faucibus semper dapibus.</p>
        </div>
      </div>
    }
    </>
  );
}

export default Header;