import React, { useState, useEffect } from "react";
// import Test1 from "./tests/Test1";
// import Test2 from "./tests/Test2";
// import Test3 from "./tests/Test3";
// import Test4 from "./tests/Test4";
// import Test5 from "./tests/Test5";
import quizData from "../../data/quiz.json";

const Test = () => {
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

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

    Object.keys(answers).map((key) => {
      console.log(answers[key]);
      if (Array.isArray(answers[key])) {
        answers[key].forEach((answer) => {
          if (answer in result) {
            result[answer] += 1;
          } else result[answer] = 1;
        });
      } else {
        if (answers[key] in result) {
          result[answers[key]] += 1;
        } else result[answers[key]] = 1;
      }
    });

    console.log(result);
  };

  return (
    <>
      <div className="grid-container">
        <form className="quiz-grid">
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
        </form>
      </div>
      <div>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleForward}>Forward</button>
        <button onClick={calculateFinalResults}>x</button>
      </div>
    </>
  );
};

export default Test;
