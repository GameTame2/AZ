import React, { useEffect, useRef, useState, useCallback } from 'react';
import vision from 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3';
import './CameraQuestions.css';

function CameraQuestions () {
  const { FaceLandmarker, FilesetResolver } = vision;

  const [faceLandmarker, setFaceLandmarker] = useState(null);
  const [runningMode, setRunningMode] = useState('IMAGE');

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const videoWidth = 420;

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
      //capturing the points in the canvas
      const noseTip = results.faceLandmarks[0][1]; // Example: index 1
      const chin = results.faceLandmarks[0][152]; // Example: index 152
      const leftCheeckbone = results.faceLandmarks[0][132];
      const rightCheeckbone = results.faceLandmarks[0][361];
      const middleEyebrows = results.faceLandmarks[0][168];

      // Draw the points on the canvas for visualization
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#44623B';
      ctx.beginPath();
      ctx.arc(noseTip.x * canvas.width, noseTip.y * canvas.height, 5, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = '#44623B';
      ctx.beginPath();
      ctx.arc(chin.x * canvas.width, chin.y * canvas.height, 5, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = '#44623B';
      ctx.beginPath();
      ctx.arc(leftCheeckbone.x * canvas.width, leftCheeckbone.y * canvas.height, 5, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = '#44623B';
      ctx.beginPath();
      ctx.arc(rightCheeckbone.x * canvas.width, rightCheeckbone.y * canvas.height, 5, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = '#44623B';
      ctx.beginPath();
      ctx.arc(middleEyebrows.x * canvas.width, middleEyebrows.y * canvas.height, 5, 0, 2 * Math.PI);
      ctx.fill();

      // calculate all the proportions
      const faceWidth = rightCheeckbone.x - leftCheeckbone.x;
      const faceHeight = chin.y - middleEyebrows.y;

      // compare the proportions
      if (faceWidth > faceHeight) {
        console.log("imash shiroko lice");
      } else {
        console.log("imash tqsno lice");
      }
    }
  }, [faceLandmarker]);

  return (
    <div>
      <h1>Face Detection with Selected Points</h1>
      <section>
        <div>
          <button onClick={measureFace}>Measure</button>
          <div style={{ position: 'relative' }}>
            <video
              ref={videoRef}
              style={{ position: 'absolute' }}
              autoPlay
              playsInline
            />
            <canvas
              ref={canvasRef}
              style={{ position: 'absolute', left: 0, top: 0 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CameraQuestions;
