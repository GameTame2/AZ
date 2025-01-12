import React, { useEffect, useRef, useState, useCallback } from 'react';
import vision from 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3';
import '../../styles/quiz.css';

function CameraQuestions() {
  const { FaceLandmarker, FilesetResolver } = vision;

  const [faceLandmarker, setFaceLandmarker] = useState(null);
  const [runningMode, setRunningMode] = useState('IMAGE');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const videoWidth = 660;

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
      newResult['question7'] = faceWidth > faceHeight ? 'maths' : 'physics';

      // Egg-shaped or Equilateral Pentagon face
      const cheekboneWidth = faceWidth;
      const jawlineWidth = points.rightMouthCorner.x - points.leftMouthCorner.x;
      newResult['question26'] = cheekboneWidth > jawlineWidth ? 'physics' : 'maths';

      // Low or High Eyebrows
      const eyebrowHeight = points.middleEyebrows.y - (points.leftEyebrow.y + points.rightEyebrow.y) / 2;
      newResult['question37'] = eyebrowHeight > 0.05 ? 'physics' : 'maths';

      // Short or Long Eyebrows
      const eyebrowWidth = Math.abs(points.leftEyebrow.x - points.rightEyebrow.x);
      newResult['question43'] = eyebrowWidth > 0.2 ? 'physics' : 'maths';

      // Lower eyelid touching iris
      const irisDistance = Math.abs(points.leftEye.y - points.rightEye.y);
      newResult['question60'] = irisDistance < 0.03 ? 'physics' : 'maths';

      // Narrow or Wide Nose Base
      const noseWidth = Math.abs(points.noseBase.x - points.leftCheekbone.x);
      newResult['question61'] = noseWidth < 0.15 ? 'physics' : 'maths';

      // Nose base above or below the pupil
      const noseToPupilDistance = Math.abs(points.noseBase.y - points.leftEye.y);
      newResult['question65'] = noseToPupilDistance > 0.05 ? 'physics' : 'maths';

      // Overall or Split Nose Tip
      const noseTipOffset = Math.abs(points.noseTip.x - points.noseBase.x);
      newResult['question68'] = noseTipOffset < 0.02 ? 'physics' : 'maths';

      // Wide or Narrow Nose Bridge
      const noseBridgeWidth = Math.abs(points.noseBridge.x - points.noseTip.x);
      newResult['question75'] = noseBridgeWidth < 0.05 ? 'maths' : 'physics';

      // Narrow or Wide Lips
      const mouthWidth = Math.abs(points.rightMouthCorner.x - points.leftMouthCorner.x);
      newResult['question93'] = mouthWidth < 0.2 ? 'physics' : 'maths';

      // Raised or Dropped Mouth Corners
      const mouthCornerHeight = Math.abs(points.leftMouthCorner.y - points.rightMouthCorner.y);
      newResult['question97'] = mouthCornerHeight < 0.03 ? 'maths' : 'physics';

      // Protruding or Sloping Chin
      newResult['question112'] = points.chin.y < points.middleEyebrows.y ? 'maths' : 'physics';

      // Update results dynamically
      setResult(prev => ({ ...prev, ...newResult }));
    }
  }, [faceLandmarker]);

  // Calculate final results
  const calculateFinalResults = () => {
    const finalResults = {};

    Object.values(result).forEach(answer => {
      finalResults[answer] = (finalResults[answer] || 0) + 1;
    });

    console.log('Final Results:', finalResults);
  };

  return (
    <div className="face-qs">
      <h1>Face Detection with Selected Points</h1>
      <section className="video">
        <div>
          <div style={{ position: 'relative' }}>
            <video ref={videoRef} autoPlay playsInline />
            <canvas ref={canvasRef} style={{ position: 'absolute', left: 0, top: 0 }} />
          </div>
          <button id="video-button" onClick={() => {
              measureFace().then(calculateFinalResults);
            }}>
            Measure
          </button>
        </div>
      </section>
    </div>
  );
}

export default CameraQuestions;