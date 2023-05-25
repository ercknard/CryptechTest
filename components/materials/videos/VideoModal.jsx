import React from 'react';

const VideoModal = ({ videoUrl, closeModals }) => {
  return (

    <>
    <div id="modalforbid" className="modal-overlay">
      <div className="modal-vid">

      <div className="close-button" onClick = {() => toNoneModal()}>
          X
        </div>


        <iframe
            className='videomodal'
          src={videoUrl}
          width="10000"
          height="315"
          frameBorder="10"
          allowFullScreen
          allow="autoplay"
        ></iframe>

      </div>

    </div>

        </>
  );
};

export default VideoModal;