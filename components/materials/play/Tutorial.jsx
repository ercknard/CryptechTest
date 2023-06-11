import React, { useState } from "react";
import TutorialModal from "./TutorialModal";

const Tutorial = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div onClick={openModal} className="a-button play-button">
      {" "}
      How to join? {modalOpen && <TutorialModal closeModal={closeModal} />}
    </div>
  );
};

export default Tutorial;
