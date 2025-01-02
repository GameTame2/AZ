import React, { useState } from 'react';
import './App.css';

function TestQuestions() {
  // State to store answers for each question
  const [answers, setAnswers] = useState({
    question3: '*',
    question7: '*',
    question8: '*',
    question9: '*',
    question14: '*',
    question20: '*',
    question33: '*',
    question34: '*',
    question36: '*',
    question38: '*',
    question44: '*',
    question56: '*',
    question58: '*',
    question62: '*',
    question64: '*',
    question66: '*',
    question77: '*',
    question80: '*',
    question91: '*',
    question98: '*',
    question100: '*',
    question102: '*',
    question103: '*',
    question113: '*',
    question115: '*',
    question117: '*',
    question121: '*',
    question125: '*',
    question129: '*',
    question134: '*',
    question127: '*',
    question138: '*',
    question139: '*',
    question141: '*',
    question144: '*',
    question148: '*',
    question150: '*',
    question168: '*',
    question170: '*',
    question172: '*',
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


  //tuka
  return (
    <div>
      <form onSubmit={handleSubmit} className="quiz-grid"> 
        <div className="quiz-box" id="quiz-box-3">
          <p>What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question3"
              value="a"
              checked={answers.question1 === 'a'}
              onChange={() => handleAnswerChange('question3', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question3"
              value="b"
              checked={answers.question1 === 'b'}
              onChange={() => handleAnswerChange('question3', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question3"
              value="c"
              checked={answers.question1 === 'c'}
              onChange={() => handleAnswerChange('question3', 'c')}
            />
            c. Green
          </label>
        </div>
        
        <div className="quiz-box" id="quiz-box-two">
          <p>Question 2: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question2"
              value="a"
              checked={answers.question2 === 'a'}
              onChange={() => handleAnswerChange('question2', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="b"
              checked={answers.question2 === 'b'}
              onChange={() => handleAnswerChange('question2', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="c"
              checked={answers.question2 === 'c'}
              onChange={() => handleAnswerChange('question2', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-three">
  <p>Question 3: What is your favorite color?</p>
  <label>
    <input
      type="radio"
      name="question3"
      value="a"
      checked={answers.question3 === 'a'}
      onChange={() => handleAnswerChange('question3', 'a')}
    />
    a. Red
  </label>
  <label>
    <input
      type="radio"
      name="question3"
      value="b"
      checked={answers.question3 === 'b'}
      onChange={() => handleAnswerChange('question3', 'b')}
    />
    b. Blue
  </label>
  <label>
    <input
      type="radio"
      name="question3"
      value="c"
      checked={answers.question3 === 'c'}
      onChange={() => handleAnswerChange('question3', 'c')}
    />
    c. Green
  </label>
        </div>

        <div className="quiz-box" id="quiz-box-four">
          <p>Question 4: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question4"
              value="a"
              checked={answers.question4 === 'a'}
              onChange={() => handleAnswerChange('question4', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question4"
              value="b"
              checked={answers.question4 === 'b'}
              onChange={() => handleAnswerChange('question4', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question4"
              value="c"
              checked={answers.question4 === 'c'}
              onChange={() => handleAnswerChange('question4', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-five">
          <p>Question 5: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question5"
              value="a"
              checked={answers.question5 === 'a'}
              onChange={() => handleAnswerChange('question5', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question5"
              value="b"
              checked={answers.question5 === 'b'}
              onChange={() => handleAnswerChange('question5', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question5"
              value="c"
              checked={answers.question5 === 'c'}
              onChange={() => handleAnswerChange('question5', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-six">
          <p>Question 6: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question6"
              value="a"
              checked={answers.question6 === 'a'}
              onChange={() => handleAnswerChange('question6', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question6"
              value="b"
              checked={answers.question6 === 'b'}
              onChange={() => handleAnswerChange('question6', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question6"
              value="c"
              checked={answers.question6 === 'c'}
              onChange={() => handleAnswerChange('question6', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-seven">
          <p>Question 7: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question7"
              value="a"
              checked={answers.question7 === 'a'}
              onChange={() => handleAnswerChange('question7', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question7"
              value="b"
              checked={answers.question7 === 'b'}
              onChange={() => handleAnswerChange('question7', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question7"
              value="c"
              checked={answers.question7 === 'c'}
              onChange={() => handleAnswerChange('question7', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-eight">
          <p>Question 8: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question8"
              value="a"
              checked={answers.question8 === 'a'}
              onChange={() => handleAnswerChange('question8', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question8"
              value="b"
              checked={answers.question8 === 'b'}
              onChange={() => handleAnswerChange('question8', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question8"
              value="c"
              checked={answers.question8 === 'c'}
              onChange={() => handleAnswerChange('question8', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-nine">
          <p>Question 9: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question9"
              value="a"
              checked={answers.question9 === 'a'}
              onChange={() => handleAnswerChange('question9', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question9"
              value="b"
              checked={answers.question9 === 'b'}
              onChange={() => handleAnswerChange('question9', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question9"
              value="c"
              checked={answers.question9 === 'c'}
              onChange={() => handleAnswerChange('question9', 'c')}
            />
            c. Green
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleSubmit} className="quiz-grid">
        
        <div className="quiz-box" id="quiz-box-one">
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
        
        <div className="quiz-box" id="quiz-box-two">
          <p>Question 2: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question2"
              value="a"
              checked={answers.question2 === 'a'}
              onChange={() => handleAnswerChange('question2', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="b"
              checked={answers.question2 === 'b'}
              onChange={() => handleAnswerChange('question2', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="c"
              checked={answers.question2 === 'c'}
              onChange={() => handleAnswerChange('question2', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-three">
  <p>Question 3: What is your favorite color?</p>
  <label>
    <input
      type="radio"
      name="question3"
      value="a"
      checked={answers.question3 === 'a'}
      onChange={() => handleAnswerChange('question3', 'a')}
    />
    a. Red
  </label>
  <label>
    <input
      type="radio"
      name="question3"
      value="b"
      checked={answers.question3 === 'b'}
      onChange={() => handleAnswerChange('question3', 'b')}
    />
    b. Blue
  </label>
  <label>
    <input
      type="radio"
      name="question3"
      value="c"
      checked={answers.question3 === 'c'}
      onChange={() => handleAnswerChange('question3', 'c')}
    />
    c. Green
  </label>
        </div>

        <div className="quiz-box" id="quiz-box-four">
          <p>Question 4: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question4"
              value="a"
              checked={answers.question4 === 'a'}
              onChange={() => handleAnswerChange('question4', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question4"
              value="b"
              checked={answers.question4 === 'b'}
              onChange={() => handleAnswerChange('question4', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question4"
              value="c"
              checked={answers.question4 === 'c'}
              onChange={() => handleAnswerChange('question4', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-five">
          <p>Question 5: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question5"
              value="a"
              checked={answers.question5 === 'a'}
              onChange={() => handleAnswerChange('question5', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question5"
              value="b"
              checked={answers.question5 === 'b'}
              onChange={() => handleAnswerChange('question5', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question5"
              value="c"
              checked={answers.question5 === 'c'}
              onChange={() => handleAnswerChange('question5', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-six">
          <p>Question 6: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question6"
              value="a"
              checked={answers.question6 === 'a'}
              onChange={() => handleAnswerChange('question6', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question6"
              value="b"
              checked={answers.question6 === 'b'}
              onChange={() => handleAnswerChange('question6', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question6"
              value="c"
              checked={answers.question6 === 'c'}
              onChange={() => handleAnswerChange('question6', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-seven">
          <p>Question 7: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question7"
              value="a"
              checked={answers.question7 === 'a'}
              onChange={() => handleAnswerChange('question7', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question7"
              value="b"
              checked={answers.question7 === 'b'}
              onChange={() => handleAnswerChange('question7', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question7"
              value="c"
              checked={answers.question7 === 'c'}
              onChange={() => handleAnswerChange('question7', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-eight">
          <p>Question 8: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question8"
              value="a"
              checked={answers.question8 === 'a'}
              onChange={() => handleAnswerChange('question8', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question8"
              value="b"
              checked={answers.question8 === 'b'}
              onChange={() => handleAnswerChange('question8', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question8"
              value="c"
              checked={answers.question8 === 'c'}
              onChange={() => handleAnswerChange('question8', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-nine">
          <p>Question 9: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question9"
              value="a"
              checked={answers.question9 === 'a'}
              onChange={() => handleAnswerChange('question9', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question9"
              value="b"
              checked={answers.question9 === 'b'}
              onChange={() => handleAnswerChange('question9', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question9"
              value="c"
              checked={answers.question9 === 'c'}
              onChange={() => handleAnswerChange('question9', 'c')}
            />
            c. Green
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleSubmit} className="quiz-grid">
        
        <div className="quiz-box" id="quiz-box-one">
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
        
        <div className="quiz-box" id="quiz-box-two">
          <p>Question 2: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question2"
              value="a"
              checked={answers.question2 === 'a'}
              onChange={() => handleAnswerChange('question2', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="b"
              checked={answers.question2 === 'b'}
              onChange={() => handleAnswerChange('question2', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="c"
              checked={answers.question2 === 'c'}
              onChange={() => handleAnswerChange('question2', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-three">
  <p>Question 3: What is your favorite color?</p>
  <label>
    <input
      type="radio"
      name="question3"
      value="a"
      checked={answers.question3 === 'a'}
      onChange={() => handleAnswerChange('question3', 'a')}
    />
    a. Red
  </label>
  <label>
    <input
      type="radio"
      name="question3"
      value="b"
      checked={answers.question3 === 'b'}
      onChange={() => handleAnswerChange('question3', 'b')}
    />
    b. Blue
  </label>
  <label>
    <input
      type="radio"
      name="question3"
      value="c"
      checked={answers.question3 === 'c'}
      onChange={() => handleAnswerChange('question3', 'c')}
    />
    c. Green
  </label>
        </div>

        <div className="quiz-box" id="quiz-box-four">
          <p>Question 4: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question4"
              value="a"
              checked={answers.question4 === 'a'}
              onChange={() => handleAnswerChange('question4', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question4"
              value="b"
              checked={answers.question4 === 'b'}
              onChange={() => handleAnswerChange('question4', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question4"
              value="c"
              checked={answers.question4 === 'c'}
              onChange={() => handleAnswerChange('question4', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-five">
          <p>Question 5: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question5"
              value="a"
              checked={answers.question5 === 'a'}
              onChange={() => handleAnswerChange('question5', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question5"
              value="b"
              checked={answers.question5 === 'b'}
              onChange={() => handleAnswerChange('question5', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question5"
              value="c"
              checked={answers.question5 === 'c'}
              onChange={() => handleAnswerChange('question5', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-six">
          <p>Question 6: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question6"
              value="a"
              checked={answers.question6 === 'a'}
              onChange={() => handleAnswerChange('question6', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question6"
              value="b"
              checked={answers.question6 === 'b'}
              onChange={() => handleAnswerChange('question6', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question6"
              value="c"
              checked={answers.question6 === 'c'}
              onChange={() => handleAnswerChange('question6', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-seven">
          <p>Question 7: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question7"
              value="a"
              checked={answers.question7 === 'a'}
              onChange={() => handleAnswerChange('question7', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question7"
              value="b"
              checked={answers.question7 === 'b'}
              onChange={() => handleAnswerChange('question7', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question7"
              value="c"
              checked={answers.question7 === 'c'}
              onChange={() => handleAnswerChange('question7', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-eight">
          <p>Question 8: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question8"
              value="a"
              checked={answers.question8 === 'a'}
              onChange={() => handleAnswerChange('question8', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question8"
              value="b"
              checked={answers.question8 === 'b'}
              onChange={() => handleAnswerChange('question8', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question8"
              value="c"
              checked={answers.question8 === 'c'}
              onChange={() => handleAnswerChange('question8', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-nine">
          <p>Question 9: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question9"
              value="a"
              checked={answers.question9 === 'a'}
              onChange={() => handleAnswerChange('question9', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question9"
              value="b"
              checked={answers.question9 === 'b'}
              onChange={() => handleAnswerChange('question9', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question9"
              value="c"
              checked={answers.question9 === 'c'}
              onChange={() => handleAnswerChange('question9', 'c')}
            />
            c. Green
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleSubmit} className="quiz-grid">
        
        <div className="quiz-box" id="quiz-box-one">
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
        
        <div className="quiz-box" id="quiz-box-two">
          <p>Question 2: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question2"
              value="a"
              checked={answers.question2 === 'a'}
              onChange={() => handleAnswerChange('question2', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="b"
              checked={answers.question2 === 'b'}
              onChange={() => handleAnswerChange('question2', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="c"
              checked={answers.question2 === 'c'}
              onChange={() => handleAnswerChange('question2', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-three">
      <p>Question 3: What is your favorite color?</p>
      <label>
      <input
      type="radio"
      name="question3"
      value="a"
      checked={answers.question3 === 'a'}
      onChange={() => handleAnswerChange('question3', 'a')}
      />
      a. Red
      </label>
      <label>
      <input
      type="radio"
      name="question3"
      value="b"
      checked={answers.question3 === 'b'}
      onChange={() => handleAnswerChange('question3', 'b')}
      />
      b. Blue
      </label>
      <label>
      <input
      type="radio"
      name="question3"
      value="c"
      checked={answers.question3 === 'c'}
      onChange={() => handleAnswerChange('question3', 'c')}
      />
      c. Green
      </label>
        </div>

        <div className="quiz-box" id="quiz-box-four">
          <p>Question 4: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question4"
              value="a"
              checked={answers.question4 === 'a'}
              onChange={() => handleAnswerChange('question4', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question4"
              value="b"
              checked={answers.question4 === 'b'}
              onChange={() => handleAnswerChange('question4', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question4"
              value="c"
              checked={answers.question4 === 'c'}
              onChange={() => handleAnswerChange('question4', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-five">
          <p>Question 5: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question5"
              value="a"
              checked={answers.question5 === 'a'}
              onChange={() => handleAnswerChange('question5', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question5"
              value="b"
              checked={answers.question5 === 'b'}
              onChange={() => handleAnswerChange('question5', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question5"
              value="c"
              checked={answers.question5 === 'c'}
              onChange={() => handleAnswerChange('question5', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-six">
          <p>Question 6: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question6"
              value="a"
              checked={answers.question6 === 'a'}
              onChange={() => handleAnswerChange('question6', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question6"
              value="b"
              checked={answers.question6 === 'b'}
              onChange={() => handleAnswerChange('question6', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question6"
              value="c"
              checked={answers.question6 === 'c'}
              onChange={() => handleAnswerChange('question6', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-seven">
          <p>Question 7: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question7"
              value="a"
              checked={answers.question7 === 'a'}
              onChange={() => handleAnswerChange('question7', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question7"
              value="b"
              checked={answers.question7 === 'b'}
              onChange={() => handleAnswerChange('question7', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question7"
              value="c"
              checked={answers.question7 === 'c'}
              onChange={() => handleAnswerChange('question7', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-eight">
          <p>Question 8: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question8"
              value="a"
              checked={answers.question8 === 'a'}
              onChange={() => handleAnswerChange('question8', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question8"
              value="b"
              checked={answers.question8 === 'b'}
              onChange={() => handleAnswerChange('question8', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question8"
              value="c"
              checked={answers.question8 === 'c'}
              onChange={() => handleAnswerChange('question8', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-nine">
          <p>Question 9: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question9"
              value="a"
              checked={answers.question9 === 'a'}
              onChange={() => handleAnswerChange('question9', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question9"
              value="b"
              checked={answers.question9 === 'b'}
              onChange={() => handleAnswerChange('question9', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question9"
              value="c"
              checked={answers.question9 === 'c'}
              onChange={() => handleAnswerChange('question9', 'c')}
            />
            c. Green
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleSubmit} className="quiz-grid">
        
        <div className="quiz-box" id="quiz-box-one">
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
        
        <div className="quiz-box" id="quiz-box-two">
          <p>Question 2: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question2"
              value="a"
              checked={answers.question2 === 'a'}
              onChange={() => handleAnswerChange('question2', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="b"
              checked={answers.question2 === 'b'}
              onChange={() => handleAnswerChange('question2', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question2"
              value="c"
              checked={answers.question2 === 'c'}
              onChange={() => handleAnswerChange('question2', 'c')}
            />
            c. Green
          </label>
        </div>

        <div className="quiz-box" id="quiz-box-three">
      <p>Question 3: What is your favorite color?</p>
      <label>
      <input
      type="radio"
      name="question3"
      value="a"
      checked={answers.question3 === 'a'}
      onChange={() => handleAnswerChange('question3', 'a')}
      />
      a. Red
      </label>
      <label>
      <input
      type="radio"
      name="question3"
      value="b"
      checked={answers.question3 === 'b'}
      onChange={() => handleAnswerChange('question3', 'b')}
      />
      b. Blue
      </label>
      <label>
      <input
      type="radio"
      name="question3"
      value="c"
      checked={answers.question3 === 'c'}
      onChange={() => handleAnswerChange('question3', 'c')}
      />
      c. Green
      </label>
        </div>

        <div className="quiz-box" id="quiz-box-four">
          <p>Question 4: What is your favorite color?</p>
          <label>
            <input
              type="radio"
              name="question4"
              value="a"
              checked={answers.question4 === 'a'}
              onChange={() => handleAnswerChange('question4', 'a')}
            />
            a. Red
          </label>
          <label>
            <input
              type="radio"
              name="question4"
              value="b"
              checked={answers.question4 === 'b'}
              onChange={() => handleAnswerChange('question4', 'b')}
            />
            b. Blue
          </label>
          <label>
            <input
              type="radio"
              name="question4"
              value="c"
              checked={answers.question4 === 'c'}
              onChange={() => handleAnswerChange('question4', 'c')}
            />
            c. Green
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TestQuestions;
