import React, { useState } from 'react';
import CameraQuestions from './CameraQuestions';
import TestQuestions from './TestQuestions';

function App() {
  // State to track which component to display
  const [showCameraQuestions, setShowCameraQuestions] = useState(true);

  // Function to handle the "Next" button click
  const handleNext = () => {
    setShowCameraQuestions(false);  // Switch to TestQuestions
  };

  return (
    <>
      <button onClick={handleNext}>Next</button>
      
      {showCameraQuestions ? <CameraQuestions /> : <TestQuestions />}
    </>
  );
}

export default App;