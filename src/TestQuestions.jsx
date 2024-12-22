import React, { useState } from 'react';

function App() {
  // State to store answers for each question
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: ''
  });

  // Handle change when a radio button is selected
  const handleAnswerChange = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the answers in JSON format
    console.log(JSON.stringify(answers, null, 2));
  };

  return (
    <div>
      <h1>Quiz</h1>
      <form onSubmit={handleSubmit}>
        {/* Question 1 */}
        <div>
          <p>Question 1: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question1"
              value="a"
              checked={answers.question1 === 'a'}
              onChange={() => handleAnswerChange('question1', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="b"
              checked={answers.question1 === 'b'}
              onChange={() => handleAnswerChange('question1', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="c"
              checked={answers.question1 === 'c'}
              onChange={() => handleAnswerChange('question1', 'c')}
            />
            c. Green
          </label>
        </div>

        {/* Question 2 */}
        <div>
          <p>Question 2: Which pet do you prefer?</p>
          <label>
            <input
              type="radio"
              name="question2"
              value="a"
              checked={answers.question2 === 'a'}
              onChange={() => handleAnswerChange('question2', 'a')}
            />
            a. Dog
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="b"
              checked={answers.question2 === 'b'}
              onChange={() => handleAnswerChange('question2', 'b')}
            />
            b. Cat
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="c"
              checked={answers.question2 === 'c'}
              onChange={() => handleAnswerChange('question2', 'c')}
            />
            c. Fish
          </label>
        </div>

        {/* Question 3 */}
        <div>
          <p>Question 3: What is your favorite season?</p>
          <label>
            <input
              type="radio"
              name="question3"
              value="a"
              checked={answers.question3 === 'a'}
              onChange={() => handleAnswerChange('question3', 'a')}
            />
            a. Spring
          </label>
          <label>
            <input
              type="radio"
              name="question3"
              value="b"
              checked={answers.question3 === 'b'}
              onChange={() => handleAnswerChange('question3', 'b')}
            />
            b. Summer
          </label>
          <label>
            <input
              type="radio"
              name="question3"
              value="c"
              checked={answers.question3 === 'c'}
              onChange={() => handleAnswerChange('question3', 'c')}
            />
            c. Winter
          </label>
        </div>

        {/* Question 4 */}
        <div>
          <p>Question 4: What kind of music do you listen to?</p>
          <label>
            <input
              type="radio"
              name="question4"
              value="a"
              checked={answers.question4 === 'a'}
              onChange={() => handleAnswerChange('question4', 'a')}
            />
            a. Pop
          </label>
          <label>
            <input
              type="radio"
              name="question4"
              value="b"
              checked={answers.question4 === 'b'}
              onChange={() => handleAnswerChange('question4', 'b')}
            />
            b. Rock
          </label>
          <label>
            <input
              type="radio"
              name="question4"
              value="c"
              checked={answers.question4 === 'c'}
              onChange={() => handleAnswerChange('question4', 'c')}
            />
            c. Jazz
          </label>
        </div>

        {/* Question 5 */}
        <div>
          <p>Question 5: What is your favorite food?</p>
          <label>
            <input
              type="radio"
              name="question5"
              value="a"
              checked={answers.question5 === 'a'}
              onChange={() => handleAnswerChange('question5', 'a')}
            />
            a. Pizza
          </label>
          <label>
            <input
              type="radio"
              name="question5"
              value="b"
              checked={answers.question5 === 'b'}
              onChange={() => handleAnswerChange('question5', 'b')}
            />
            b. Sushi
          </label>
          <label>
            <input
              type="radio"
              name="question5"
              value="c"
              checked={answers.question5 === 'c'}
              onChange={() => handleAnswerChange('question5', 'c')}
            />
            c. Pasta
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
