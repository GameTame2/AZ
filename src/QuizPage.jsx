import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import vision from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";
import axios from 'axios';

const { FaceLandmarker, FilesetResolver } = vision;

const QuizPage = () => {
    const [faceLandmarker, setFaceLandmarker] = useState(null);
    const [runningMode, setRunningMode] = useState("IMAGE");
    const [questionsAnswers, setQuestionsAnswers] = useState([]);
    const [facialData, setFacialData] = useState(null);
    const [step, setStep] = useState(1);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const history = useNavigate();
  
    useEffect(() => {
      async function createFaceLandmarker() {
        const filesetResolver = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
        );
        const landmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
          baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
          },
          outputFaceBlendshapes: true,
          runningMode,
          numFaces: 1,
        });
        setFaceLandmarker(landmarker);
      }
      createFaceLandmarker();
    }, [runningMode]);
  
    useEffect(() => {
      if (!faceLandmarker) return;
      const constraints = { video: true };
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.addEventListener("loadeddata", predictWebcam);
        }
      });
    }, [faceLandmarker]);
  
    const predictWebcam = async () => {
      if (!videoRef.current || !canvasRef.current || !faceLandmarker) return;
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const ratio = video.videoHeight / video.videoWidth;
      video.style.width = "480px";
      video.style.height = `${480 * ratio}px`;
      canvas.style.width = "480px";
      canvas.style.height = `${480 * ratio}px`;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
  
      if (runningMode === "IMAGE") {
        setRunningMode("VIDEO");
        await faceLandmarker.setOptions({ runningMode: "VIDEO" });
      }
    };
  
    const measureFace = async () => {
      if (!videoRef.current || !canvasRef.current || !faceLandmarker) return;
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const startTimeMs = performance.now();
      const results = faceLandmarker.detectForVideo(video, startTimeMs);
  
      if (results.faceLandmarks) {
        const noseTip = results.faceLandmarks[0][1]; // Example: index 1
        const chin = results.faceLandmarks[0][152]; // Example: index 152
  
        if (noseTip && chin) {
          setFacialData({
            noseTip: { x: noseTip.x, y: noseTip.y },
            chin: { x: chin.x, y: chin.y },
          });
          // Draw the points on the canvas for visualization
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = "red";
          ctx.beginPath();
          ctx.arc(noseTip.x * canvas.width, noseTip.y * canvas.height, 5, 0, 2 * Math.PI);
          ctx.fill();
  
          ctx.fillStyle = "blue";
          ctx.beginPath();
          ctx.arc(chin.x * canvas.width, chin.y * canvas.height, 5, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
    };
  
    const handleAnswerChange = (question, answer) => {
      const updatedAnswers = [...questionsAnswers];
      updatedAnswers[question] = answer;
      setQuestionsAnswers(updatedAnswers);
    };
  
    const handleSubmit = async () => {
      const data = {
        answers: questionsAnswers,
        facialData,
      };
  
      try {
        const response = await axios.post('/api/submit', data);
        console.log('Server response:', response.data);
        history.push('/results', { results: response.data });
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    };
  
    const renderQuestionSection = () => {
      if (step === 1) {
        return (
          <>
            <h3>Answer these 5 questions:</h3>
            {/* Replace these with actual questions */}
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <label>Question {i + 1}</label>
                <input
                  type="text"
                  onChange={(e) => handleAnswerChange(i, e.target.value)}
                />
              </div>
            ))}
            <button onClick={() => setStep(2)}>Next</button>
          </>
        );
      } else if (step === 2) {
        return (
          <>
            <h3>Fun Fact: Did you know...?</h3>
            <p>Here's a fun fact!</p>
            <button onClick={() => setStep(3)}>Next</button>
          </>
        );
      } else if (step === 3) {
        return (
          <>
            <h3>Answer 10 more questions:</h3>
            {[...Array(10)].map((_, i) => (
              <div key={i}>
                <label>Question {i + 6}</label>
                <input
                  type="text"
                  onChange={(e) => handleAnswerChange(i + 5, e.target.value)}
                />
              </div>
            ))}
            <button onClick={() => setStep(4)}>Next</button>
          </>
        );
      } else if (step === 4) {
        return (
          <>
            <h3>Now, let's measure your face!</h3>
            <button onClick={measureFace}>Measure Face</button>
            <div style={{ position: "relative" }}>
              <video ref={videoRef} style={{ position: "absolute" }} autoPlay playsInline />
              <canvas ref={canvasRef} style={{ position: "absolute", left: 0, top: 0 }} />
            </div>
            <button onClick={() => setStep(5)}>Next</button>
          </>
        );
      } else if (step === 5) {
        return (
          <>
            <h3>Final Step: Answer the last 5 questions</h3>
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <label>Question {i + 16}</label>
                <input
                  type="text"
                  onChange={(e) => handleAnswerChange(i + 15, e.target.value)}
                />
              </div>
            ))}
            <button onClick={handleSubmit}>Finalize</button>
          </>
        );
      }
    };
  
    return (
      <div>
        <h1>Identify Your Professional Talents</h1>
        {renderQuestionSection()}
      </div>
    );
  };

export default QuizPage;