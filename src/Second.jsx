import React, { useEffect, useRef } from "react";
import { FilesetResolver, FaceLandmarker } from "@mediapipe/tasks-vision";

function FaceAnalysis() {
  const videoRef = useRef(null);
  const faceLandmarkerRef = useRef(null);

  useEffect(() => {
    const initializeFaceLandmarker = async () => {
      try {
        // Initialize the FilesetResolver for Vision Tasks
        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
        );

        // Create the FaceLandmarker instance with model path
        faceLandmarkerRef.current = await FaceLandmarker.createFromModelPath(
          vision,
          "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task"
        );

        console.log("Face Landmarker initialized.");

        // Start the camera
        startCamera();
      } catch (error) {
        console.error("Error initializing Face Landmarker:", error);
      }
    };

    const startCamera = async () => {
      try {
        // Access the user's webcam
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }

        // Start processing video frames for landmarks
        processVideo();
      } catch (error) {
        console.error("Error accessing the camera:", error);
      }
    };

    const processVideo = () => {
      const detectLandmarks = async () => {
        if (!faceLandmarkerRef.current || !videoRef.current) return;

        // Detect landmarks on the current video frame
        const landmarks = await faceLandmarkerRef.current.detect(videoRef.current);
        console.log("Landmarks detected:", landmarks);

        // Call detectLandmarks again for the next frame
        requestAnimationFrame(detectLandmarks);
      };

      // Start the detection loop
      detectLandmarks();
    };

    // Initialize the Face Landmarker and start the camera
    initializeFaceLandmarker();
  }, []);

  return (
    <div>
      <h1>Face Analysis with Camera</h1>
      {/* Video element to display the camera feed */}
      <video ref={videoRef} width="640" height="480" autoPlay muted />
    </div>
  );
}

export default FaceAnalysis;