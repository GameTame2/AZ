import React, { useEffect, useRef, useState } from "react";
import vision from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";

function FaceSecond() {

    const [faceLandmarker, setFaceLandmarker] = useState(null);
    const [runningMode, setRunningMode] = useState('IMAGE');
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const createFaceLandmarker = async () => {
        const filesetResolver = await mediapipe.FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm'
        );
        const landmarker = await mediapipe.FaceMesh.createSolution({
          baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_mesh/face_mesh/float16/1/face_mesh.json`,
            delegate: 'GPU',
            maxNumFaces: 1,
            outputFaceLandmarks: true,
          },
        });
  
        setFaceLandmarker(landmarker);
      };
  
      createFaceLandmarker();
    }, []);
  
    const handleClick = async (event) => {
      if (!faceLandmarker) {
        console.log('Wait for faceLandmarker to load before clicking!');
        return;
      }
  
      if (runningMode === 'VIDEO') {
        setRunningMode('IMAGE');
        await faceLandmarker.onResults(results => {
          // Handle video results here (optional)
        });
      }
  
      const ctx = canvasRef.current.getContext('2d');
      const drawingUtils = new mediapipe.DrawingUtils(ctx);
  
      const image = event.target;
      const imageData = new ImageData(image.width, image.height);
      ctx.drawImage(image, 0, 0, image.width, image.height);
      imageData.data.set(ctx.getImageData(0, 0, image.width, image.height).data);
  
      const results = await faceLandmarker.send({ image: imageData });
      if (!results.faceMesh) {
        return;
      }
  
      drawingUtils.drawConnectors(
        results.faceMesh[0].landmarkList,
        mediapipe.FaceMesh.FACEMESH_TESSELATION,
        { color: '#C0C0C070', lineWidth: 1 }
      );
      // Draw other facial landmarks as needed
      drawBlendShapes(imageBlendShapes, results.faceMesh[0].normalizedExpressions); // Assuming drawBlendShapes is defined elsewhere
    };
  
    const handleWebcamStream = (stream) => {
      videoRef.current.srcObject = stream;
    };
  
    const toggleWebcam = async () => {
      if (!webcamRunning) {
        if (navigator.mediaDevices) {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            handleWebcamStream(stream);
            setRunningMode('VIDEO');
            webcamRunning = true;
            await faceLandmarker.onResults(results => {
              const ctx = canvasRef.current.getContext('2d');
              const drawingUtils = new mediapipe.DrawingUtils(ctx);
              ctx.drawImage(videoRef.current, 0, 0, videoWidth, videoWidth * (videoRef.current.videoHeight / videoRef.current.videoWidth));
              drawingUtils.drawConnectors(
                results.multiFaceLandmarks[0],
                mediapipe.FaceMesh.FACEMESH_TESSELATION,
                { color: '#C0C0C070', lineWidth: 1 }
              );
              // Draw other facial landmarks as needed
              drawBlendShapes(imageBlendShapes, results.multiFaceLandmarks[0].normalizedExpressions); // Assuming drawBlendShapes is defined elsewhere
            });
          } catch (error) {
            console.error('Error accessing webcam:', error);
          }
        } else {
          console.error('Webcam access not supported');
        }
      } else {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
        setRunningMode('IMAGE');
        webcamRunning = false;
      }
    }

    return(
        
        <section className="invisible">

        <h2>Demo: Webcam continuous face landmarks detection</h2>
        <p>Hold your face in front of your webcam to get real-time face landmarker detection. Click <b>enable webcam</b> below and grant access to the webcam if prompted.</p>

        <div id="liveView" className="videoView">
        <button id="webcamButton" className="mdc-button mdc-button--raised">
            <span className="mdc-button__ripple"></span>
            <span className="mdc-button__label">ENABLE WEBCAM</span>
        </button>
        <div>
            <video id="webcam" autoplay playsinline></video>
            <canvas className="output_canvas" id="output_canvas"></canvas>
        </div>
        </div>
        <div className="blend-shapes">
        <ul className="blend-shapes-list" id="video-blend-shapes"></ul>
        </div>
        </section>
    );
}

export default FaceSecond