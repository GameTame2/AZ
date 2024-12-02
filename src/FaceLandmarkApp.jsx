import React, { useEffect, useRef, useState } from "react";
import vision from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";

const FaceDetectorApp = () => {
  const { FaceLandmarker, FilesetResolver } = vision;

  const [faceLandmarker, setFaceLandmarker] = useState(null);
  const [webcamRunning, setWebcamRunning] = useState(false);
  const [runningMode, setRunningMode] = useState("IMAGE");

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const videoWidth = 480;

  useEffect(() => {
    async function createFaceLandmarker() {
      const filesetResolver = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
      );

      const landmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
        baseOptions: {
          modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
          delegate: "GPU",
        },
        outputFaceBlendshapes: true,
        runningMode,
        numFaces: 1,
      });

      setFaceLandmarker(landmarker);
    }

    createFaceLandmarker();
  }, [FaceLandmarker, FilesetResolver, runningMode]);

  const enableCam = () => {
    if (!faceLandmarker) {
      console.log("Wait! FaceLandmarker not loaded yet.");
      return;
    }

    setWebcamRunning((prev) => !prev);

    if (!webcamRunning) {
      const constraints = { video: true };
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.addEventListener("loadeddata", predictWebcam);
        }
      });
    }
  };

  const predictWebcam = async () => {
    if (!videoRef.current || !canvasRef.current || !faceLandmarker) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const ratio = video.videoHeight / video.videoWidth;
    video.style.width = `${videoWidth}px`;
    video.style.height = `${videoWidth * ratio}px`;
    canvas.style.width = `${videoWidth}px`;
    canvas.style.height = `${videoWidth * ratio}px`;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    if (runningMode === "IMAGE") {
      setRunningMode("VIDEO");
      await faceLandmarker.setOptions({ runningMode: "VIDEO" });
    }

    const startTimeMs = performance.now();
    const results = faceLandmarker.detectForVideo(video, startTimeMs);

    if (results.faceLandmarks) {
      // Extract two specific points (e.g., nose tip and chin)
      const noseTip = results.faceLandmarks[0][1]; // Example: index 1
      const chin = results.faceLandmarks[0][152]; // Example: index 152

      if (noseTip && chin) {
        console.log("Nose Tip:", { x: noseTip.x, y: noseTip.y });
        console.log("Chin:", { x: chin.x, y: chin.y });
      }

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

    if (webcamRunning) {
      requestAnimationFrame(predictWebcam);
    }
  };

  return (
    <div>
      <h1>Face Detection with Selected Points</h1>
      <section>
        <div>
          <button onClick={enableCam}>
            {webcamRunning ? "DISABLE PREDICTIONS" : "ENABLE WEBCAM"}
          </button>
          <div style={{ position: "relative" }}>
            <video
              ref={videoRef}
              style={{ position: "absolute" }}
              autoPlay
              playsInline
            />
            <canvas
              ref={canvasRef}
              style={{ position: "absolute", left: 0, top: 0 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaceDetectorApp;