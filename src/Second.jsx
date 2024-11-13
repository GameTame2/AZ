import React, { useRef, useState, useEffect } from "react";
import { FilesetResolver, FaceLandmarker } from "@mediapipe/tasks-vision";

function FaceLandmarkerApp() {
  const [filesetResolver, setFilesetResolver] = useState(null);
  const [faceLandmarker, setFaceLandmarker] = useState(null);
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Load the fileset resolver once on component mount
  useEffect(() => {
    const loadFilesetResolver = async () => {
      const resolver = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
      );
      setFilesetResolver(resolver);
    };
    loadFilesetResolver();
  }, []);

  // Initialize the FaceLandmarker when filesetResolver is ready
  useEffect(() => {
    if (filesetResolver) {
      const initializeFaceLandmarker = async () => {
        const faceLandmarkerInstance = await FaceLandmarker.createFromOptions(filesetResolver, {
          baseOptions: {
            modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
            delegate: 'GPU'
          },
          runningMode: "VIDEO",
          outputFaceBlendshapes: true,
          outputFacialTransformationMatrixes: true
        });
        setFaceLandmarker(faceLandmarkerInstance);
      };
      initializeFaceLandmarker();
    }
  }, [filesetResolver]);

  // Function to enable the webcam and play video
  const enableWebcam = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsWebcamActive(true);
      } catch (error) {
        console.error("Error accessing the webcam:", error);
      }
    }
  };

  // Continuous face landmark detection loop
  const detectFaceLandmarks = async () => {
    if (faceLandmarker && videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      
      const detect = async () => {
        const startTimeMs = performance.now();
        const result = await faceLandmarker.detectForVideo(videoRef.current, startTimeMs);

        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw detected landmarks
        if (result && result.faceLandmarks) {
          result.faceLandmarks.forEach(landmark => {
            landmark.forEach(point => {
              context.beginPath();
              context.arc(point.x * canvas.width, point.y * canvas.height, 2, 0, 2 * Math.PI);
              context.fillStyle = "red";
              context.fill();
            });
          });
        } else {
          console.log("No landmarks detected");
        }

        // Call detect recursively for continuous updates
        requestAnimationFrame(detect);
      };
      detect();
    }
  };

  // Start detection loop when webcam is active
  useEffect(() => {
    if (isWebcamActive) {
      detectFaceLandmarks();
    }
  }, [isWebcamActive]);

  return (
    <div>
      {filesetResolver ? <p>Fileset Resolver Loaded</p> : <p>Loading...</p>}
      <h2>Demo: Webcam Continuous Face Landmarks Detection</h2>
      <p>Hold your face in front of your webcam to get real-time face landmark detection. Click enable webcam below and grant access to the webcam if prompted.</p>

      <div id="liveView" className="videoView">
        <button onClick={enableWebcam} className="mdc-button mdc-button--raised">
          <span className="mdc-button__ripple"></span>
          <span className="mdc-button__label">ENABLE WEBCAM</span>
        </button>
        <div style={{ position: "relative" }}>
          <video ref={videoRef} style={{ position: "absolute", zIndex: 1 }} autoPlay playsInline width="640" height="480"></video>
          <canvas ref={canvasRef} style={{ position: "absolute", left: 0, top: 0, zIndex: 2 }} width="640" height="480"></canvas>
        </div>
      </div>
      <div className="blend-shapes">
        <ul className="blend-shapes-list" id="video-blend-shapes"></ul>
      </div>
    </div>
  );
}

export default FaceLandmarkerApp;
