import React, { useState } from 'react';
import CameraQuestions from './app/CameraQuestions';
import TestQuestions from './app/TestQuestions';
import './app/App.css';

function App() {
  const [answers, setAnswers] = useState({
    question3: '',
    question7: '',
    question8: '',
    question9: '',
    question14: '',
    question18: '',
    question20: '',
    question24: '',
    question26: '',
    question33: '',
    question34: '',
    question36: '',
    question37: '',
    question38: '',
    question43: '',
    question44: '',
    question56: '',
    question58: '',
    question60: '',
    question61: '',
    question62: '',
    question64: '',
    question65: '',
    question66: '',
    question68: '',
    question75: '',
    question77: '',
    question80: '',
    question91: '',
    question93: '',
    question97: '',
    question98: '',
    question100: '',
    question102: '',
    question103: '',
    question109: '',
    question112: '',
    question113: '',
    question115: '',
    question117: '',
    question121: '',
    question125: '',
    question129: '',
    question134: '',
    question137: '',
    question138: '',
    question139: '',
    question141: '',
    question144: '',
    question148: '',
    question150: '',
    question168: '',
    question170: '',
    question172: '',
  });

  let physics, chemistry, geography, biology, journalism, pedagogue, medicine, art;

  function calculateScores() {
    switch (key) {
      case value:
        
        break;
    
      default:
        break;
    }
  }

  const scoringRules = {
    physics: ['question3', 'question8', 'question18', 'question26', 'question33', 'question58', 'question62', 'question91', 'question100', 'question103', 'question115', 'question121', 'question137', 'question144'],
    chemistry: ['question9', 'question3', 'question24', 'question38', 'question65', 'question66', 'question113', 'question125', 'question150', 'question168'],
    geography: ['question7', 'question9', 'question37', 'question38', 'question58', 'question60', 'question61', 'question64', 'question75', 'question139'],
    biology: ['question26', 'question44', 'question56', 'question65', 'question77', 'question98', 'question125', 'question150', 'question153', 'question172'],
    journalism: ['question36', 'question43', 'question62', 'question93', 'question97', 'question103', 'question112', 'question125', 'question134', 'question170'],
    pedagogue: ['question43', 'question58', 'question68', 'question90', 'question91', 'question102', 'question134', 'question139', 'question147', 'question170'],
    medicine: ['question14', 'question56', 'question61', 'question65', 'question68', 'question102', 'question109', 'question112', 'question134'],
    art: ['question20', 'question37', 'question43', 'question58', 'question102', 'question115', 'question138', 'question141', 'question170', 'question172'],
  };


  return (
    <>
      <CameraQuestions answers={answers} setAnswers={setAnswers} />
      <TestQuestions answers={answers} setAnswers={setAnswers} />
    </>
  );
}

export default App;
