import React, { useState } from "react";
import CameraQuestions from "../components/quiz/CameraQuestions.jsx";
import ScrollSection from "../components/quiz/ScrollSection.jsx";
import Header from "../components/website/Header.jsx"
import "../styles/quiz.css";

function Quiz() {
  const [result, setResult] = useState({});
  const [showTestQuestions, setShowTestQuestions] = useState(false);

  const handleFinalResults = (newScores) => {
    setResult((prevResult) => {
      const updatedResult = { ...prevResult };
      Object.keys(newScores).forEach((key) => {
        updatedResult[key] = (prevResult[key] || 0) + newScores[key];
      });
      console.log("Result received in parent:", updatedResult);
      return updatedResult;
    });
  };

  return (
    <>

      <header className="quiz-header">
        <a href="/">
          <img src="src/img/logo.png" alt="logo" className="quiz-logo"/>
        </a>
      </header>

      <CameraQuestions onCalculateFinalResults={handleFinalResults} />

    <div className="quiz-container">
    <div className="quiz-headings-container">
      <h1>Готови с камерата?</h1>
      <a className="quiz-button" onClick={() => setShowTestQuestions(true)}>
        Започнете с тестовите въпроси
      </a>
    </div>
    
      {showTestQuestions && (
        <ScrollSection onCalculateFinalResults={handleFinalResults} />
      )}

      {Object.keys(result).length > 0 && (
        <div>
          <h2>Parent Results:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
    </>
  );
}

export default Quiz;
