import React, { useState, useEffect } from 'react';
import '../../../styles/quiz.css';
import quizData from '../../../data/quiz.json'; // Import the JSON file

const Test2 = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Load data from the second array in the JSON structure
    if (quizData.length > 1) {
      setQuestions(quizData[1]); // Load questions from the second array
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gather answers in JSON format
    const formData = new FormData(e.target);
    const answers = {};
    questions.forEach((question) => {
      answers[question.id] = formData.get(`question-${question.id}`);
    });
    console.log(JSON.stringify(answers, null, 2));
  };

  return (
    <div className="grid-container">
      <form onSubmit={handleSubmit} className="quiz-grid">
        {questions.map((question) => (
          <div key={question.id} className="quiz-box">
            <p>{question.question}</p>
            {Object.keys(question.answers).map((answerKey) => (
              <label key={answerKey}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={answerKey}
                  required
                />
                {answerKey}
              </label>
            ))}
          </div>
        ))}
      </form>
    </div>
  );
};

export default Test2;