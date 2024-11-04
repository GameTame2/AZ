import React, { useRef, useState, useEffect } from "react";
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

    const newDot = { x, y };
    setDots((prevDots) => [...prevDots, newDot]); // Store the new dot coordinates
  };

  // Redraw all dots
  const redrawDots = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    const background = new Image();
    background.src = image;
    background.onload = () => {
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height); // Redraw the background image
      dots.forEach(dot => drawDot(dot.x, dot.y)); // Redraw each dot
    };
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

  // UseEffect to redraw dots whenever the dot list changes
  useEffect(() => {
    if (image) {
      redrawDots();
    }
  }, [dots, image]);

  // Undo the last placed dot
  const undoLastDot = () => {
    setDots((prevDots) => prevDots.slice(0, -1)); // Remove the last dot from the list
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
          <div>
            <button onClick={undoLastDot}>Undo Last Dot</button>
            <button onClick={sendCoordinates}>Send Coordinates</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;