"use client";

import { useEffect, useRef, useState } from "react";

const Test = () => {
  const canvasRef = useRef<any>(null);
  const camRef = useRef<any>(null);
  const [openCamera, setOpenCamera] = useState(false);
  const [image, setImage] = useState(null);

  const openCam = () => {
    setOpenCamera((prev) => !prev);
  };

  const initializeMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      camRef.current.srcObject = stream;
      camRef.current.style.display = "block";
    } catch (error) {
      console.error(error);
    }
  };

  const handleCapture = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (camRef.current) {
      const cam = camRef.current;
      context.drawImage(cam, 0, 0, canvas.width, canvas.height);

      const imageDataURL = canvas.toDataURL("image/png");

      setImage(imageDataURL);

      cam.srcObject?.getVideoTracks().forEach((track: any) => {
        track.stop();
      });

      cam.style.display = "none";
      // canvas.style.display = "block";

      setOpenCamera(false);
    }
  };

  useEffect(() => {
    if (openCamera) initializeMedia();
  }, [openCamera]);

  return (
    <div className="my-[5rem] bg-white">
      <video className="w-full" ref={camRef} id="player" autoPlay />
      <canvas id="canvas" ref={canvasRef} className="hidden w-full h-full" />
      {image && (
        <img src={image} alt="test" className="h-full w-full aspect-square" />
      )}
      <button id="capture" className="text-brand mt-20" onClick={handleCapture}>
        Capture
      </button>
      <button id="capture" className="text-brand mt-20 ml-20" onClick={openCam}>
        Open Camera
      </button>
    </div>
  );
};
export default Test;
