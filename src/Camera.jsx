import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";

function Camera() {
    const webRef = useRef(null);
    const canvasRef = useRef(null);
    const [image, setImage] = useState(null);
    const [dots, setDots] = useState([]); // Store coordinates and type of each dot
  
    // Capture the image from the webcam
    const captureImage = () => {
      const screenshot = webRef.current.getScreenshot();
      setImage(screenshot);
    };
  
    // Handle clicks on the canvas to place dots
    const handleCanvasClick = (e) => {
      if (dots.length >= 10) return; // Only allow up to 10 dots
  
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newDot = { x, y, shape: getShape(dots.length), color: getColor(dots.length) };
      setDots((prevDots) => [...prevDots, newDot]); // Add new dot with its type and color
    };
  
    // Determine the shape based on the number of dots
    const getShape = (index) => {
      if (index < 3) return "triangle";
      if (index < 7) return "rectangle";
      return "circle";
    };
  
    // Determine the color based on the number of dots
    const getColor = (index) => {
      if (index < 3) return "red";
      if (index < 7) return "blue";
      return "green";
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
        dots.forEach(dot => drawDot(dot)); // Redraw each dot with its shape and color
      };
    };
  
    // Draw a dot on the canvas with specific shape and color
    const drawDot = ({ x, y, shape, color }) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = color;
  
      if (shape === "triangle") {
        ctx.beginPath();
        ctx.moveTo(x, y - 5);
        ctx.lineTo(x - 5, y + 5);
        ctx.lineTo(x + 5, y + 5);
        ctx.closePath();
        ctx.fill();
      } else if (shape === "rectangle") {
        ctx.fillRect(x - 5, y - 5, 10, 10);
      } else if (shape === "circle") {
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
      }
    };
  
    // UseEffect to redraw dots whenever the dot list or image changes
    useEffect(() => {
      if (image) {
        redrawDots();
      }
    }, [dots, image]);
  
    // Undo the last placed dot
    const undoLastDot = () => {
      setDots((prevDots) => prevDots.slice(0, -1)); // Remove the last dot from the list
    };
  
    // Send dot coordinates to the back end in a structured JSON format
    const sendCoordinates = () => {
      const data = {
        coordinates: dots.map((dot, index) => ({
          id: index + 1,
          x: dot.x,
          y: dot.y,
        })),
      };
      console.log("Sending data:", JSON.stringify(data, null, 2));
      // Send 'data' to the back end here (e.g., using fetch or axios)
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

export default Camera