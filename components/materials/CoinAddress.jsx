"use client";
import Image from "next/image";
import CopyText from "@public/assets/scripts/copyText";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CoinsAddress = () => (
  <div className="slideshow-container">
    <ToastContainer
      position="top-right"
      autoClose={1000}
      limit={1}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    <div className="mySlides-coin fade">
      <Image
        alt="Coins"
        className="leads-photo-abs4"
        src="/assets/images/bitcoin.webp"
        width={50}
        height={50}
      />
      <div className="coin-bg address">
        <CopyText text="36UHvrS9jX226kads9tdjgta3sq3RFGjZz" />
      </div>
    </div>
    <div className="mySlides-coin fade">
      <Image
        alt="Coins"
        className="leads-photo-abs4"
        src="/assets/images/dash-logo.webp"
        width={50}
        height={50}
      />
      <div className="coin-bg address">
        <CopyText text="XkS9v246S4U4mYo7RhVpyxQfv6G6o5kUfr" />
      </div>
    </div>
    <div className="mySlides-coin fade">
      <Image
        alt="Coins"
        className="leads-photo-abs4"
        src="/assets/images/dogecoin.webp"
        width={50}
        height={50}
      />
      <div className="coin-bg address">
        <CopyText text="DBFKW511txib9237kBeFt5GcSYPKWcnoGc" />
      </div>
    </div>
    <div className="mySlides-coin fade">
      <Image
        alt="Coins"
        className="leads-photo-abs4"
        src="/assets/images/etc.webp"
        width={50}
        height={50}
      />
      <div className="coin-bg address">
        <CopyText text="0x122e3F3877fEDEC646A7891cB779c9F8583cE237" />
      </div>
    </div>
    <div className="mySlides-coin fade">
      <Image
        alt="Coins"
        className="leads-photo-abs4"
        src="/assets/images/ethereum.webp"
        width={50}
        height={50}
      />
      <div className="coin-bg address">
        <CopyText text="0x1914062c4e5aFe8B4Aaa2b9e46ef4F99F61606C0" />
      </div>
    </div>
    <div className="mySlides-coin fade">
      <Image
        alt="Coins"
        className="leads-photo-abs4"
        src="/assets/images/litecoin.webp"
        width={50}
        height={50}
      />
      <div className="coin-bg address">
        <CopyText text="MUxtfEzoHeqVf7EwjdzEVoCbnWPRwk9NSd" />
      </div>
    </div>
    <div className="mySlides-coin fade">
      <Image
        alt="Coins"
        className="leads-photo-abs4"
        src="/assets/images/metrix-coin.webp"
        width={50}
        height={50}
      />
      <div className="coin-bg address">
        <CopyText text="MRAZUn5azvVBTVCSFi6y7xyWAhMCcNN3AB" />
      </div>
    </div>
    <div className="mySlides-coin fade">
      <Image
        alt="Coins"
        className="leads-photo-abs4"
        src="/assets/images/namecoin.webp"
        width={50}
        height={50}
      />
      <div className="coin-bg address">
        <CopyText text="NB5rTVYfApfe7GfdaMmUra8PpusJqkoyuu" />
      </div>
    </div>
    <div className="mySlides-coin fade">
      <Image
        alt="Coins"
        className="leads-photo-abs4"
        src="/assets/images/ohm.webp"
        width={50}
        height={50}
      />
      <div className="coin-bg address">
        <CopyText text="ZK3WpPRBsoboHoemJeiGbnJEuCwQYUqB4q" />
      </div>
    </div>
    <div className="mySlides-coin fade">
      <Image
        alt="Coins"
        className="leads-photo-abs4"
        src="/assets/images/zcash.webp"
        width={50}
        height={50}
      />
      <div className="coin-bg address">
        <CopyText text="t1RCU5Sbaj15EiA2sVVZQZLAsffGW1m1WAt" />
      </div>
    </div>
    <div className="mySlides-coin fade">
      <Image
        alt="Coins"
        className="leads-photo-abs4"
        src="/assets/images/scc.webp"
        width={50}
        height={50}
      />
      <div className="coin-bg address">
        <CopyText text="sMZ8CXDDkPqFrm8W7A1rXhsW1zRrfekJMY" />
      </div>
    </div>
  </div>
);

export default CoinsAddress;
