import React, { useEffect, useRef, useState, useCallback } from 'react';
import vision from 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3';
import './App.css';

function CameraQuestions () {
  const { FaceLandmarker, FilesetResolver } = vision;

  const [faceLandmarker, setFaceLandmarker] = useState(null);
  const [runningMode, setRunningMode] = useState('IMAGE');

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const videoWidth = 660;

  // Create FaceLandmarker function inside useEffect
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

    // Cleanup function to prevent memory leaks
    return () => {
      if (faceLandmarker) {
        faceLandmarker.close(); // Close the faceLandmarker when the component unmounts
      }
    };
  }, [FaceLandmarker, FilesetResolver, runningMode]);

  // Setup webcam once faceLandmarker is created
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

    // Cleanup webcam stream on component unmount
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop()); // Stop all tracks
      }
    };
  }, [faceLandmarker]);

  const predictWebcam = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current || !faceLandmarker) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

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

  const measureFace = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current || !faceLandmarker) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const startTimeMs = performance.now();
    const results = await faceLandmarker.detectForVideo(video, startTimeMs);

    if (results.faceLandmarks) {
      // capturing the points in the canvas
      const noseTip = results.faceLandmarks[0][1]; // Example: index 1
      const chin = results.faceLandmarks[0][152]; // Example: index 152
      const leftCheekbone = results.faceLandmarks[0][93];
      const rightCheekbone = results.faceLandmarks[0][323];
      const middleEyebrows = results.faceLandmarks[0][168];
      const leftEyebrow = results.faceLandmarks[0][70];
      const rightEyebrow = results.faceLandmarks[0][300];
      const leftEye = results.faceLandmarks[0][33];
      const rightEye = results.faceLandmarks[0][263];
      const leftMouthCorner = results.faceLandmarks[0][61];
      const rightMouthCorner = results.faceLandmarks[0][291];
      const noseBase = results.faceLandmarks[0][2]; // Base of the nose
      const noseBridge = results.faceLandmarks[0][166]; // Nose bridge
      
      // Draw the points on the canvas for visualization
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      // Draw the face landmarks (example)
      const points = [noseTip, chin, leftCheekbone, rightCheekbone, middleEyebrows, leftEyebrow, rightEyebrow, leftEye, rightEye, leftMouthCorner, rightMouthCorner, noseBase, noseBridge];
      points.forEach(point => {
        ctx.fillStyle = '#44623B';
        ctx.beginPath();
        ctx.arc(point.x * canvas.width, point.y * canvas.height, 5, 0, 2 * Math.PI);
        ctx.fill();
      });
    
      // Calculate proportions
      const faceWidth = rightCheekbone.x - leftCheekbone.x;
      const faceHeight = chin.y - middleEyebrows.y;
      
      // 1. Rectangle or Oval face
      if (faceWidth > faceHeight) {
        console.log("Rectangular face");
      } else {
        console.log("Oval face");
      }
    
      // 2. Egg-shaped or Equilateral Pentagon face
      const cheekboneWidth = rightCheekbone.x - leftCheekbone.x;
      const jawlineWidth = rightMouthCorner.x - leftMouthCorner.x;
      if (cheekboneWidth > jawlineWidth) {
        console.log("Egg-shaped face");
      } else {
        console.log("Equilateral Pentagon face");
      }
    
      // 3. Low or High Eyebrows
      const eyebrowHeight = middleEyebrows.y - (leftEyebrow.y + rightEyebrow.y) / 2;
      if (eyebrowHeight > 0.05) {
        console.log("High eyebrows");
      } else {
        console.log("Low eyebrows");
      }
    
      // 4. Short or Long Eyebrows
      const eyebrowWidth = Math.abs(leftEyebrow.x - rightEyebrow.x);
      if (eyebrowWidth > 0.2) {
        console.log("Long eyebrows");
      } else {
        console.log("Short eyebrows");
      }
    
      // 5. Lower eyelid touching iris
      const irisDistance = Math.abs(leftEye.y - rightEye.y);
      if (irisDistance < 0.03) {
        console.log("Lower eyelid touches iris");
      } else {
        console.log("Lower eyelid does not touch iris");
      }
    
      // 6. Narrow or Wide Nose Base
      const noseWidth = Math.abs(noseBase.x - leftCheekbone.x);
      if (noseWidth < 0.15) {
        console.log("Narrow nose base");
      } else {
        console.log("Wide nose base");
      }
    
      // 7. Nose base above or below the pupil
      const noseToPupilDistance = Math.abs(noseBase.y - leftEye.y);
      if (noseToPupilDistance > 0.05) {
        console.log("Nose base below the pupil");
      } else {
        console.log("Nose base above the pupil");
      }
    
      // 8. Overall or Split Nose Tip
      if (Math.abs(noseTip.x - noseBase.x) < 0.02) {
        console.log("Overall nose tip");
      } else {
        console.log("Split nose tip");
      }
    
      // 9. Wide or Narrow Nose Bridge
      const noseBridgeWidth = Math.abs(noseBridge.x - noseTip.x);
      if (noseBridgeWidth < 0.05) {
        console.log("Narrow nose bridge");
      } else {
        console.log("Wide nose bridge");
      }
    
      // 10. Narrow or Wide Lips
      const mouthWidth = Math.abs(rightMouthCorner.x - leftMouthCorner.x);
      if (mouthWidth < 0.2) {
        console.log("Narrow lips");
      } else {
        console.log("Wide lips");
      }
    
      // 11. Raised or Dropped Mouth Corners
      const mouthCornerHeight = Math.abs(leftMouthCorner.y - rightMouthCorner.y);
      if (mouthCornerHeight < 0.03) {
        console.log("Raised mouth corners");
      } else {
        console.log("Dropped mouth corners");
      }
    
      // 12. Chin wrinkle
      const chinWrinkle = Math.abs(chin.y - middleEyebrows.y);
      if (chinWrinkle < 0.02) {
        console.log("Chin wrinkle present");
      } else {
        console.log("No chin wrinkle");
      }
    
      // 13. Protruding or Sloping Chin
      if (chin.y < middleEyebrows.y) {
        console.log("Protruding chin");
      } else {
        console.log("Sloping chin");
      }
    }
  }, [faceLandmarker]);

  return (
    <div className="face-qs">
      <h1>Face Detection with Selected Points</h1>
      <section className="video">
        <div>
          <div style={{ position: 'relative' }}>
            <video
              ref={videoRef}
              style={{ position: 'relative' }}
              autoPlay
              playsInline
            />
            <canvas
              ref={canvasRef}
              style={{ position: 'absolute', left: 0, top: 0 }}
            />
          </div>
          <a id="video-button" onClick={measureFace}>Measure</a>
        </div>
      </section>
    </div>
  );
};

export default CameraQuestions;
