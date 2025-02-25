import React, { useEffect, useRef, useState, useCallback } from 'react';
import vision from 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3';
import '../../styles/quiz.css';

const CameraQuestions = ({ onCalculateFinalResults }) => {
  const { FaceLandmarker, FilesetResolver } = vision;

  const [faceLandmarker, setFaceLandmarker] = useState(null);
  const [runningMode, setRunningMode] = useState('IMAGE');
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(true); // New state variable
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const videoWidth = window.innerWidth * 0.5;

  // To store results dynamically
  const [result, setResult] = useState({});

  // Create FaceLandmarker instance
  useEffect(() => {
    const createFaceLandmarker = async () => {
      const filesetResolver = await FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm'
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
    };

    createFaceLandmarker();

    // Cleanup on unmount
    return () => {
      if (faceLandmarker) {
        faceLandmarker.close();
      }
    };
  }, [FaceLandmarker, FilesetResolver, runningMode]);

  // Initialize webcam
  useEffect(() => {
    if (!faceLandmarker) return;

    const constraints = { video: true };
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.addEventListener('loadeddata', predictWebcam);
        }
      } catch (error) {
        console.error('Error accessing webcam: ', error);
      }
    };

    startWebcam();

    // Cleanup webcam stream
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [faceLandmarker]);

  // Prediction logic
  const predictWebcam = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current || !faceLandmarker) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    const ratio = video.videoHeight / video.videoWidth;
    video.style.width = `${videoWidth}px`;
    video.style.height = `${videoWidth * ratio}px`;
    canvas.style.width = `${videoWidth}px`;
    canvas.style.height = `${videoWidth * ratio}px`;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    if (runningMode === 'IMAGE') {
      setRunningMode('VIDEO');
      await faceLandmarker.setOptions({ runningMode: 'VIDEO' });
    }
  }, [faceLandmarker, runningMode]);

  // Measure face and calculate answers
  const measureFace = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current || !faceLandmarker) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const startTimeMs = performance.now();
    const results = await faceLandmarker.detectForVideo(video, startTimeMs);

    if (results.faceLandmarks) {
      const landmarks = results.faceLandmarks[0];

      const points = {
        noseTip: landmarks[1],
        chin: landmarks[152],
        leftCheekbone: landmarks[93],
        rightCheekbone: landmarks[323],
        middleEyebrows: landmarks[168],
        leftEyebrow: landmarks[70],
        rightEyebrow: landmarks[300],
        leftEye: landmarks[33],
        rightEye: landmarks[263],
        leftMouthCorner: landmarks[61],
        rightMouthCorner: landmarks[291],
        noseBase: landmarks[2],
        noseBridge: landmarks[166],
      };

      // Draw points for visualization
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      Object.values(points).forEach(point => {
        ctx.fillStyle = '#44623B';
        ctx.beginPath();
        ctx.arc(point.x * canvas.width, point.y * canvas.height, 5, 0, 2 * Math.PI);
        ctx.fill();
      });

      // Dynamic result calculations
      const newResult = {};

      // Example: Rectangle or Oval face
      const faceWidth = points.rightCheekbone.x - points.leftCheekbone.x;
      const faceHeight = points.chin.y - points.middleEyebrows.y;
      newResult['7'] = faceWidth > faceHeight ? 'geo' : '';
      newResult['18'] = faceWidth > faceHeight ? 'math' : '';
      newResult['24'] = faceWidth > faceHeight ? 'chem' : '';

      // Egg-shaped or Equilateral Pentagon face
      const cheekboneWidth = faceWidth;
      const jawlineWidth = points.rightMouthCorner.x - points.leftMouthCorner.x;
      newResult['26'] = cheekboneWidth > jawlineWidth ? ['math', 'bio'] : '';

      // Low or High Eyebrows
      const eyebrowHeight = points.middleEyebrows.y - (points.leftEyebrow.y + points.rightEyebrow.y) / 2;
      newResult['37'] = eyebrowHeight > 0.05 ? 'geo' : 'art';

      // Short or Long Eyebrows
      const eyebrowWidth = Math.abs(points.leftEyebrow.x - points.rightEyebrow.x);
      newResult['43'] = eyebrowWidth > 0.2 ? ['journal', 'journal', 'history', 'ped', 'art'] : '';

      // Lower eyelid touching iris
      const irisDistance = Math.abs(points.leftEye.y - points.rightEye.y);
      newResult['60'] = irisDistance < 0.03 ? ['geo'] : '';

      // Narrow or Wide Nose Base
      const noseWidth = Math.abs(points.noseBase.x - points.leftCheekbone.x);
      newResult['61'] = noseWidth < 0.15 ? 'geo' : 'med';

      // Nose base above or below the pupil
      const noseToPupilDistance = Math.abs(points.noseBase.y - points.leftEye.y);
      newResult['65'] = noseToPupilDistance > 0.05 ? ['chem', 'bio', 'history', 'med'] : '';

      // Overall or Split Nose Tip
      const noseTipOffset = Math.abs(points.noseTip.x - points.noseBase.x);
      newResult['68'] = noseTipOffset < 0.02 ? '' : ['history', 'ped', 'med'];

      // Wide or Narrow Nose Bridge
      const noseBridgeWidth = Math.abs(points.noseBridge.x - points.noseTip.x);
      newResult['75'] = noseBridgeWidth < 0.05 ? '' : 'geo';

      // Narrow or Wide Lips
      const mouthWidth = Math.abs(points.rightMouthCorner.x - points.leftMouthCorner.x);
      newResult['93'] = mouthWidth < 0.2 ? 'journal' : '';

      // Raised or Dropped Mouth Corners
      const mouthCornerHeight = Math.abs(points.leftMouthCorner.y - points.rightMouthCorner.y);
      newResult['97'] = mouthCornerHeight < 0.03 ? 'journal' : '';

      // Protruding or Sloping Chin
      newResult['112'] = points.chin.y < points.middleEyebrows.y ? ['journal', 'history', 'med'] : '';

      // Update results dynamically
      setResult(prev => ({ ...prev, ...newResult }));
      console.log(newResult);
    }
  }, [faceLandmarker]);

  function calculateFinalResults(newResult) {
    const finalResult = {};

    // Iterate over the values in the newResult object
    Object.values(newResult).forEach((value) => {
      // Increment the count for the value in the result object
      if (value == "") return;
      if (Array.isArray(value)) {
        value.forEach((element) => {
          finalResult[element] = (finalResult[element] || 0) + 1;
        });
        return;
      }
      finalResult[value] = (finalResult[value] || 0) + 1;
    });

    return finalResult;
  }

  // Usage in the button's onClick handler
  const handleSubmit = useCallback(() => {
    const finalResults = calculateFinalResults(result); // Use the current `result` state
    console.log("Camera Results:", finalResults); // Log or use finalResults as needed
    onCalculateFinalResults(finalResults);
    setIsOverlayVisible(true);
    setIsVideoVisible(false); // Hide the video section
  }, [result, onCalculateFinalResults]);

  return (
    <div className="face-qs">
      <h1>Опознай таланта си!</h1>
      <p className='quiz-steps'>1. Застани пред камерата, така че лицето ти да е в рамката и <strong> да не е наклонено.</strong> 2. Натисни бутон "Измерване" 3. При поява на точки по лицето натисни бутон "Готов!" 4. Започни с тестовите въпроси 5. След като си отговорил на всички въпроси, натисни бутон "Аз съм?"</p>
      {isVideoVisible && ( // Conditionally render the video section
        <section className="video">
          <div>
            <div style={{ position: 'relative' }}>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{
                  width: "100%",
                  height: "auto", // Maintain aspect ratio
                  display: "block",
                }}
              />
              <canvas
                ref={canvasRef}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%", // Ensures the overlay stays on top of the video
                }}
              />
            </div>
            <div className="camera-buttons">
              <a className="quiz-button" onClick={measureFace}>
                Измерване
              </a>
              <a className='quiz-button' onClick={handleSubmit}>
                Готов!
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default CameraQuestions;