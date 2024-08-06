import React, { useRef, useEffect } from 'react';
import './introVideo.css'; // Ensure the CSS file path is correct

const IntroVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    // Ensure the video plays automatically
    videoElement.play();

    // Ensure the video loops
    videoElement.addEventListener('ended', () => {
      videoElement.play(); // Replay the video when it ends
    });

    // Clean up the event listener when the component unmounts
    return () => {
      videoElement.removeEventListener('ended', () => {
        videoElement.play(); // Ensure cleanup handles the play
      });
    };
  }, []);

  return (
    <div className="video-container">
      <video 
        ref={videoRef}
        autoPlay 
        loop
        muted // Mute the video if you want it to play automatically without sound
        controls // Optional, remove if you don't want user controls
        style={{ width: '100vw', height: '750px', objectFit: 'cover' }}
      >
        <source src="/videos/introVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default IntroVideo;
