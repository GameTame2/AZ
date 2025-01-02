import React from 'react';
import './website.css';

function Header() {

  return (
    <>
    <header> 
        <div className="left-header">
            <img src="src\img\logo.png" alt="" />
        </div>
        <div className="right-header">
            <ul className="right-header-ul">
                <li><a href="#">Начало.</a></li>
                <li><a href="#">Защо?</a></li>
                <li><a href="#">Тестове!</a></li>
            </ul>
        </div>
    </header>
    </>
  );
}

export default Header;