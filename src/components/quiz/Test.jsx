import React, { useState, useEffect } from "react";
import quizData from "../../data/quiz.json";

const Test = ({ onCalculateFinalResults }) => {
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finalResultMessage, setFinalResultMessage] = useState(""); // New state for result message

  useEffect(() => {
    setCurrentQuestions(quizData[currentIndex]);
  }, [currentIndex]);

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quizData.length - 1 : prevIndex - 1
    );
  };

  const handleForward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === quizData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleAnswer = (question, value) => {
    setAnswers((answers) => ({
      ...answers,
      [question]: value,
    }));
  };

  const calculateFinalResults = () => {
    const result = {};

    Object.keys(answers).forEach((key) => {
      if (Array.isArray(answers[key])) {
        answers[key].forEach((answer) => {
          result[answer] = (result[answer] || 0) + 1;
        });
      } else {
        result[answers[key]] = (result[answers[key]] || 0) + 1;
      }
    });

    console.log(result);
    onCalculateFinalResults(result); // Send the result to the parent

    // Check the category count and set a message
    let message = "Your talent is unknown!";
    if (result["math"] >= 8) {
      message = "You are a mathematician!";
    } else if (result["chem"] >= 6) {
      message += "You are a chemist!";
    } else if (result["geo"] >= 6) {
      message += "You are a geograph!";
    } else if (result["bio"] >= 6) {
      message += "You are a biologist!";
    } else if (result["journal"] >= 7) {
      message += "You are a journalist!";
    } else if (result["history"] >= 6) {
      message += "You are a historian!";
    } else if (result["ped"] >= 6) {
      message += "You are a pedagog!";
    } else if (result["med"] >= 6) {
      message += "You are a medician!";
    } else if (result["art"] >= 6) {
      message += "You are an artist!";
    }

    setFinalResultMessage(message);
  };

  return (
    <>
      <div className="grid-container">
        <div className="quiz-grid">
          {currentQuestions.map((question) => (
            <div
              id={`quiz-box-${question.id}`}
              key={question.id}
              className="quiz-box"
            >
              <p>{question.question}</p>
              {Object.keys(question.answers).map((key) => (
                <label key={key}>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    onChange={() =>
                      handleAnswer(question.id, question.answers[key])
                    }
                    checked={answers[question.id] === question.answers[key]}
                    required
                  />
                  {key}
                </label>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="form-button-container">
          <div className="form-button-container-in">
            <button onClick={handleBack}>&#9664;</button>
            <button onClick={handleForward}>&#9654;</button>
          </div>
          <button onClick={calculateFinalResults}>Calculate</button>
        </div>
      </div>

      {/* Display the result message */}
      {finalResultMessage && (
        <div className="result-message">
          <h2>{finalResultMessage}</h2>
        </div>
      )}
    </>
  );
};

export default Test;