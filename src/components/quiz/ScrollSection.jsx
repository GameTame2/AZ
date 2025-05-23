import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Art from "./jobs/Art";
import Biology from "./jobs/Biology";
import Chemistry from "./jobs/Chemistry";
import Geography from "./jobs/Geography";
import History from "./jobs/History";
import Journalism from "./jobs/Journalism";
import Math from "./jobs/Math";
import Medicine from "./jobs/Medicine";
import Ped from "./jobs/Ped";
import "../../styles/quiz.css";
import quizData from "../../data/quiztwo.json";

// Map component names to components
const componentMap = {
  Art: Art,
  Biology: Biology,
  Chemistry: Chemistry,
  Geography: Geography,
  History: History,
  Journalism: Journalism,
  Math: Math,
  Medicine: Medicine,
  Ped: Ped,
};

function ScrollSection({
  onCalculateFinalResults = () => {},
  allResults = {},
}) {
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
  };

  useEffect(() => {
    const finalMessage = getFinalMessage();
    setFinalResultMessage(finalMessage);
  }, [allResults]);

  function getFinalMessage() {
    let talents = [];

    if (allResults["math"] >= 8) {
      talents.push("Math");
    }
    if (allResults["chem"] >= 6) {
      talents.push("Chemistry");
    }
    if (allResults["geo"] >= 6) {
      talents.push("Geography");
    }
    if (allResults["bio"] >= 6) {
      talents.push("Biology");
    }
    if (allResults["journal"] >= 7) {
      talents.push("Journalism");
    }
    if (allResults["history"] >= 6) {
      talents.push("History");
    }
    if (allResults["ped"] >= 6) {
      talents.push("Ped");
    }
    if (allResults["med"] >= 6) {
      talents.push("Medicine");
    }
    if (allResults["art"] >= 6) {
      talents.push("Art");
    }

    console.log(allResults);
    return talents.length > 0 ? talents : ["Your talent is unknown!"];
  }

  // Calculate the percentage of answered questions
  const progressPercentage = (answeredCount / quizData.length) * 100;

  // Get the component to render based on finalResultMessage
  const ResultComponent = componentMap[finalResultMessage];

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef} className="scroll-section-middle">
        <div ref={sectionRef} className="scroll-section-inner">
          {quizData.map((item) => (
            <div className="scroll-section" key={item.id}>
              <div className="images-wrapper">
                <div>
                  <img
                    src={`/images/quiz/${item.id}_a.png`}
                    onError={(event) => (event.target.style.display = "none")}
                  />
                </div>
                <div>
                  <img
                    src={`/images/quiz/${item.id}_b.png`}
                    onError={(event) => (event.target.style.display = "none")}
                  />
                </div>
              </div>
              <h3>{item.question}</h3>
              <form>
                {Object.keys(item.answers).map((key) => (
                  <label key={key}>
                    <div>
                      <input
                        type="radio"
                        name={`question-${item.id}`}
                        value={key}
                        onChange={() =>
                          handleAnswer(item.id, item.answers[key])
                        }
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

      <a onClick={calculateFinalResults} className="quiz-button">
        Аз съм?
      </a>

      {finalResultMessage.length > 0 && (
        <div className="result-message">
          {finalResultMessage.map((talent) => (
            <div key={talent}>
              {componentMap[talent] &&
                React.createElement(componentMap[talent])}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ScrollSection;
