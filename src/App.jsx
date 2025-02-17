import { React, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Website from './pages/Website.jsx';
import Quiz from './pages/Quiz.jsx';
import HorizontalScroll from './pages/HorizontalScroll.jsx';
import ScrollSection from "./components/quiz/ScrollSection.jsx";
import Story from "./pages/Story.jsx";

function App() {
  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Website />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/story" element={<HorizontalScroll />} />
            <Route path="/scroll" element={<ScrollSection />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;