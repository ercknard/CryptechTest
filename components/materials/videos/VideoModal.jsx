"use client"
import React from 'react';

const VideoModal = ({ videoUrl, closeModal }) => {
    const handleClose = () => {
        closeModal(); // Call the provided closeModal function to close the modal
      };
  return (

    <>
    <div id="modalforbid" className="modal-overlay" onClick={handleClose}>
      <div className="modal-vid" onClick={(e) => e.stopPropagation()}>

        <iframe
            className='videomodal'
          src={videoUrl}
          width="10000"
          height="315"
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
        ></iframe>

<div className="close-button" onClick = {handleClose}>
        Close
      </div>

      </div>

    </div>

        </>
  );
};

export default VideoModal;