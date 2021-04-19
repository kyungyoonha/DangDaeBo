import React, { useRef, useEffect, useState } from 'react';
import { Hill } from './Hill';

const Canvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext('2d');
    let stageWidth = window.innerWidth;
    let stageHeight = window.innerHeight;

    let hills = [Hill('#fd6bea', 0.2, 12), Hill('#ff59c2', 0.5, 8), Hill('#ff4674', 1.4, 6)];

    const resize = () => {
      stageWidth = window.innerWidth;
      stageHeight = window.innerHeight;

      canvas.width = stageWidth * 2;
      canvas.height = stageHeight * 2;
      ctx.scale(2, 2);

      for (let i = 0; i < hills.length; i++) {
        hills[i].resize(stageWidth, stageHeight);
      }
    };

    const animate = () => {
      window.requestAnimationFrame(animate);
      ctx.clearRect(0, 0, stageWidth, stageHeight);

      let dots;
      for (let i = 0; i < hills.length; i++) {
        dots = hills[i].draw(ctx);
      }
    };

    window.addEventListener('resize', resize, false);
    resize();
    requestAnimationFrame(animate);
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default Canvas;
