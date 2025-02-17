import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../../styles/quiz.css';
import quizData from '../../data/quiztwo.json';

function ScrollSection({ onCalculateFinalResults = () => {} }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finalResultMessage, setFinalResultMessage] = useState("");
  const [answeredCount, setAnsweredCount] = useState(0); // Track answered questions

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${(quizData.length - 1) * 50}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "20000 bottom",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  useEffect(() => {
    setCurrentQuestions(quizData[currentIndex]);
  }, [currentIndex]);

  const handleAnswer = (questionId, value) => {
    setAnswers((prevAnswers) => {
      const newAnswers = {
        ...prevAnswers,
        [questionId]: value,
      };

      // Update the answered count based on the number of keys in newAnswers
      setAnsweredCount(Object.keys(newAnswers).length);

      return newAnswers;
    });
  };

  const calculateFinalResults = () => {
    const result = {};

    Object.keys(answers).forEach((key) => {
      if (Array.isArray(answers[key])) {
        answers[key].forEach((key) => {
          result[key] = (result[key] || 0) + 1;
        });
      } else {
        result[answers[key]] = (result[answers[key]] || 0) + 1;
      }
    });

    console.log(result);
    onCalculateFinalResults(result);

    let message = "Your talent is unknown!";
    if (result["math"] >= 8) {
      message = "math";
    } else if (result["chem"] >= 6) {
      message = "chem";
    } else if (result["geo"] >= 6) {
      message = "geo";
    } else if (result["bio"] >= 6) {
      message = "bio";
    } else if (result["journal"] >= 7) {
      message = "journal";
    } else if (result["history"] >= 6) {
      message = "history";
    } else if (result["ped"] >= 6) {
      message = "ped";
    } else if (result["med"] >= 6) {
      message = "med";
    } else if (result["art"] >= 6) {
      message = "art";
    }

    setFinalResultMessage(message);
  };

  // Calculate the percentage of answered questions
  const progressPercentage = (answeredCount / quizData.length) * 100;

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef} className="scroll-section-middle">
        <div ref={sectionRef} className="scroll-section-inner">
          {quizData.map((item) => (
            <div className="scroll-section" key={item.id}>
              <h3>{item.question}</h3>
              <form>
                {Object.keys(item.answers).map((key) => (
                  <label key={key}>
                    <div>
                      <input
                      type="radio"
                      name={`question-${item.id}`}
                      value={key}
                      onChange={() => handleAnswer(item.id, item.answers[key])}
                      checked={answers[item.id] === item.answers[key]}
                    />
                    {key}
                    </div>
                  </label>
                ))}
              </form>
            </div>
          ))}
        </div>
        <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      </div>

      {/* Progress Bar */}
      

      <a onClick={calculateFinalResults} className="quiz-button">Calculate</a>

      {finalResultMessage && (
        <div className="result-message">
          <h2>{finalResultMessage}</h2>
        </div>
      )}
    </section>
  );
}

export default ScrollSection;