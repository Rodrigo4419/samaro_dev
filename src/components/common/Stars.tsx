'use client'
import {useRef, useEffect}from "react";
//import "./style.css";

export default function Stars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if(!canvas){
        return
    }
    //@ts-ignore
    const ctx = canvas.getContext("2d");
     //@ts-ignore
    const stars = [];
    const starCount = 200;
     //@ts-ignore
    canvas.width = window.innerWidth;
     //@ts-ignore
    canvas.height = window.innerHeight;

    for (let i = 0; i < starCount; i++) {
      stars.push({
         //@ts-ignore
        x: Math.random() * canvas.width,
         //@ts-ignore
        y: Math.random() * canvas.height,
        r: Math.random() * 1,
        a: Math.random(),
        speed: 0.01 + Math.random() * 0.01,
      });
    }

    function animate() {
       //@ts-ignore
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
       //@ts-ignore
      stars.forEach(star => {
        star.a += star.speed;
        const opacity = 0.5 + Math.sin(star.a) * 0.5;

        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "black",
      }}
    />
  );
}