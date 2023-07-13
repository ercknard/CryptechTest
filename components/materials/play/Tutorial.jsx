import React, { useState } from "react";
import { useEffect } from "react";
import TutorialModal from "./TutorialModal";

const Tutorial = () => {
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
    <div onClick={openModal} className="a-button play-button">
      {" "}
      Get Started {modalOpen && <TutorialModal closeModal={closeModal} />}
    </div>
  );
};

export default Tutorial;
