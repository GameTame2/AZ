import { React, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Website from './pages/Website.jsx';
import Quiz from './pages/Quiz.jsx';

function App() {
  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Website />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;