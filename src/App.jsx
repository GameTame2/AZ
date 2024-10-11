
import './App.css';
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

function App() {
  const webRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [dots, setDots] = useState([]); // Store coordinates of each dot

  // Capture the image from the webcam
  const captureImage = () => {
    const screenshot = webRef.current.getScreenshot();
    setImage(screenshot);
  };

  // Handle clicks on the canvas to place dots
  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setDots([...dots, { x, y }]); // Store the new dot coordinates
    drawDot(x, y); // Draw the dot immediately
  };

  // Draw a dot on the canvas
  const drawDot = (x, y) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI); // Draw a small circle
    ctx.fillStyle = "red";
    ctx.fill();
  };

  // Send dot coordinates to the back end
  const sendCoordinates = () => {
    const json = JSON.stringify(dots);
    console.log("Sending coordinates:", json);
    // You can send 'json' to the back end here (e.g., using fetch or axios)
  };

  return (
    <div className="App">
      <h1>Place Dots on Your Image</h1>
      {!image ? (
        <>
          <Webcam ref={webRef} />
          <button onClick={captureImage}>Capture Image</button>
        </>
      ) : (
        <div>
          <canvas
            ref={canvasRef}
            width={640}
            height={480}
            onClick={handleCanvasClick}
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
          />
          <button onClick={sendCoordinates}>Send Coordinates</button>
        </div>
      )}
    </div>
  );
}

export default App;
