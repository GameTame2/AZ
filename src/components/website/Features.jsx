import React from 'react';
import '../../styles/website.css';

function Features() {


  return (
    <section id='features'>
        <div className="feature-box">
            <img src="src\img\group17.png" alt="feature-image" />
            <h2>Сканирай лицевите си черти</h2>
        </div>
        <div className="feature-box">
            <img src="src\img\crown3dd.png" alt="feature-image" />
            <h2>Отговори на въпроси за себе си</h2>
        </div>
        <div className="feature-box">
            <img src="src\img\hoveringincons.png" alt="feature-image" />
            <h2>Опознай над 10 таланта, които може би имаш</h2>
        </div>
    </section>
  );
}

export default Features;