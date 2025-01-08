import React, { useState } from 'react';
import CameraQuestions from '../components/quiz/CameraQuestions.jsx';
import TestQuestions from '../components/quiz/TestQuestions.jsx';
import '../styles/quiz.css';

function Quiz() {

  return (
    <>
      <CameraQuestions answers={answers} setAnswers={setAnswers} />
      <TestQuestions answers={answers} setAnswers={setAnswers} />
    </>
  );
}

export default Quiz;
