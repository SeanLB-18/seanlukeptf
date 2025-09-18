// BackgroundShapesCanvas.jsx
import React, { useEffect, useRef } from "react";

const BackgroundShapesCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const shapes = Array.from({ length: 8 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 100 + Math.random() * 80,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255,255,255,0.05)";
      ctx.globalCompositeOperation = "lighter";

      shapes.forEach((shape) => {
        ctx.beginPath();
        ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
        ctx.fill();

        shape.x += shape.dx;
        shape.y += shape.dy;

        if (shape.x < 0 || shape.x > width) shape.dx *= -1;
        if (shape.y < 0 || shape.y > height) shape.dy *= -1;
      });

      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default BackgroundShapesCanvas;
