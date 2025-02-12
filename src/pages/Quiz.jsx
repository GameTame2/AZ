import React, { useState } from "react";
import CameraQuestions from "../components/quiz/CameraQuestions.jsx";
import Test from "../components/quiz/Test.jsx";
import ScrollSection from "../components/quiz/ScrollSection.jsx";
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
      <button onClick={() => setShowTestQuestions(true)}>
        Start Test Questions
      </button>

      <CameraQuestions onCalculateFinalResults={handleFinalResults} />

        {showTestQuestions && (
      <ScrollSection/>
        )}


      {Object.keys(result).length > 0 && (
        <div>
          <h2>Parent Results:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default Quiz;
