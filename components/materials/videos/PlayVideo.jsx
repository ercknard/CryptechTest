import React, { useState } from "react";
import VideoModal from "./VideoModal";
import { useEffect } from "react";

const PlayVideo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div onClick={openModal} className="a-button play-button-1">
      {" "}
      Watch Trailer ➤{" "}
      {modalOpen && (
        <VideoModal
          videoUrl="https://firebasestorage.googleapis.com/v0/b/cryptech-3c327.appspot.com/o/CryptechTest_Teaser_final%20(1).mp4?alt=media&token=466d45d1-f730-4e0f-9b23-a24cc7dccc96"
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default PlayVideo;
