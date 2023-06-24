import React from "react";
import { toast } from "react-toastify";

const CopyText = ({ text }) => {
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Text copied to clipboard!", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return <p onClick={handleCopyClick}>{text}</p>;
};

export default CopyText;
