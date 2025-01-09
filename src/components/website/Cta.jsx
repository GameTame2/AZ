import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/website.css';

function Cta() {
  return (
    <div className="cta">
      <Link to="/quiz">
        <img src="src/img/cta.png" alt="cta-button" />
      </Link>
    </div>
  );
}

export default Cta;
