// filepath: /c:/Users/Ilija/Documents/Projects/MERN/Book Library/frontend/src/hooks/useVideoState.js
import { useRef, useEffect } from 'react';

const useVideoState = (videoSrc) => {
  const videoRef = useRef(null);
  const currentTimeRef = useRef(0);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.currentTime = currentTimeRef.current;
      videoElement.play();
    }

    return () => {
      if (videoElement) {
        currentTimeRef.current = videoElement.currentTime;
      }
    };
  }, [videoSrc]);

  return videoRef;
};

export default useVideoState;