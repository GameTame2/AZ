import React, { useState } from 'react';
import Test1 from './tests/Test1';
import Test2 from './tests/Test2';
import Test3 from './tests/Test3';
import Test4 from './tests/Test4';
import Test5 from './tests/Test5';
import '../../data/quiz.json';

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Tests = [
    <Test1 />,
    <Test2 />,
    <Test3 />,
    <Test4 />,
    <Test5 />,
  ];

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Tests.length - 1 : prevIndex - 1));
  };

  const handleForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Tests.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div>{Tests[currentIndex]}</div>
      <div>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleForward}>
          Forward
        </button>
      </div>
    </div>
  );
};

export default Test;
