import React, { useState } from "react";

function Quiz() {
    // Sample questions with four answer options each
    const questions = [
      {
        id: 1,
        question: "What's your favorite color?",
        options: ["Red", "Blue", "Green", "Yellow"]
      },
      {
        id: 2,
        question: "Which season do you prefer?",
        options: ["Spring", "Summer", "Autumn", "Winter"]
      },
      {
        id: 3,
        question: "Choose a preferred pet:",
        options: ["Dog", "Cat", "Bird", "Fish"]
      },
      {
        id: 4,
        question: "What's your favorite meal of the day?",
        options: ["Breakfast", "Lunch", "Dinner", "Snack"]
      },
      {
        id: 5,
        question: "What's your favorite type of movie?",
        options: ["Action", "Comedy", "Drama", "Horror"]
      }
    ];
  
    // State to store selected answers
    const [answers, setAnswers] = useState({});
  
    // Handle answer selection
    const handleAnswer = (questionId, answerIndex) => {
      const answerLetter = String.fromCharCode(97 + answerIndex); // Convert index to 'a', 'b', 'c', 'd'
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: answerLetter
      }));
    };
  
    // Submit and send answers in JSON format
    const handleSubmit = () => {
      const answerArray = Object.entries(answers).map(([questionId, answer]) => ({
        questionId: parseInt(questionId),
        answer
      }));
  
      const data = { responses: answerArray };
      console.log("Sending data:", JSON.stringify(data, null, 2));
      // Send 'data' to the back end using fetch or axios
    };
  
    return (
      <div className="App">
        <h1>Quiz</h1>
        {questions.map((q) => (
          <div key={q.id} style={{ marginBottom: "20px" }}>
            <h3>{q.question}</h3>
            {q.options.map((option, index) => (
              <div key={option}>
                <label>
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option}
                    checked={answers[q.id] === String.fromCharCode(97 + index)}
                    onChange={() => handleAnswer(q.id, index)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleSubmit}>Submit Answers</button>
      </div>
    );
  }

export default Quiz;