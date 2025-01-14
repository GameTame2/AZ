import React, { useState } from "react";
import CameraQuestions from "../components/quiz/CameraQuestions.jsx";
import Test from "../components/quiz/Test.jsx";
import "../styles/quiz.css";

function Quiz() {
  const [result, setResult] = useState({}); // Initialize as an empty object

  const handleFinalResults = (newScores) => {
    // Merge new scores with the existing ones
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
      <CameraQuestions onCalculateFinalResults={handleFinalResults} />
      <Test onCalculateFinalResults={handleFinalResults} />
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
