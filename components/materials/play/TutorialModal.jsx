"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const TutorialModal = ({ closeModal }) => {
  const handleClose = () => {
    closeModal(); // Call the provided closeModal function to close the modal
  };
  return (
    <>
      <div id="modalforbid" className="modal-overlay-tut" onClick={handleClose}>
        <div className="modal-vid-tut" onClick={(e) => e.stopPropagation()}>
          <div className="tut-mem">
            <div>
              <h2 className="tut-h3">Join CryptechTest Now!</h2>
              <p className="details-1 tut-mine">
                ¹ Its simple, to join our server first download the client which
                is free on their page:{" "}
                <Link href="https://www.minetest.net/" target="_blank">
                  MINETEST
                </Link>{" "}
                .
              </p>
              <p className="details-1 tut-mine">
                ² Open Minetest client, choose the join game tab. Put
                CryptectTest Credentials:{" "}
                <p className="credentials ips">
                  IP: cryptechcraft.xyz / us.cryptechcraft.xyz /
                  cryptechtest.xyz
                </p>{" "}
                <p className="credentials ips">Port: 30000</p>³ Press the
                Register option. Once you have done that, the client will
                proceed to download the necessary files and thats it.{" "}
                <p className="credentials">
                  "Welcome to our server and good luck landing." -Karen
                </p>
              </p>
            </div>
          </div>
          <div className="close-button" onClick={handleClose}>
            Close
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialModal;
