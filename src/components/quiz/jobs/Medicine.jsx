import React from "react";
import "../../../styles/quiz.css";


const Medicine = () => {
  return (
    <div className="job art">
      <div className="jobmodel">
        <div className="arth1">МЕДИЦИНА</div>
        <div className="artp">
          <img src="/images/down-arrow.png" alt="down" />
          Имаш невероятен талант за медицина! Обичаш да разбираш как функционира
          човешкото тяло и да намираш решения за здравословни проблеми. Твоето
          внимание към детайлите и съчувствие към другите те правят истински
          лекар, готов да помага на хората да водят здравословен и щастлив
          живот! 🩺💉{" "}
        </div>
        <img className="jobimg" src="/images/surgeon.jpeg" alt="surgeon" />
      </div>
    </div>
  );
};

export default Medicine;
