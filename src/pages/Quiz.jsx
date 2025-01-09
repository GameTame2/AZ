import React, { useState } from 'react';
import CameraQuestions from '../components/quiz/CameraQuestions.jsx';
import TestQuestions from '../components/quiz/TestQuestions.jsx';
import Test from '../components/quiz/Test.jsx';
import '../styles/quiz.css';

function Quiz() {

  return (
    <>
      <Test />
      <CameraQuestions/>
      <TestQuestions/>
    </>
  );
}

export default Quiz;
