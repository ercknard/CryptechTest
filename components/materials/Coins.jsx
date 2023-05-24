"use client"
import Image from "next/image";

const Coins= () => (

    <div id="coin-active-btn" className="agent-home">
    <div
      onClick = {() => currentSlidecoins(1)}
      className="banner mod squid-color coin-buttons"
    >
      <Image
        alt="Coins"
        className="leads-photo-abs3"
        src="/assets/images/bitcoin.webp"
        width={50}
        height={50}
      />
      <h4> BITCOIN </h4>
    </div>
    <div
      onClick = {() => currentSlidecoins(2)}
      className="banner mod seqsee-color coin-buttons"
    >
      <Image
        alt="Coins"
        className="leads-photo-abs3"
        src="/assets/images/dash-logo.webp"
        width={50}
        height={50}
      />
      <h4> DASH </h4>
    </div>
    <div
      onClick = {() => currentSlidecoins(3)}
      className="banner mod vanikoro-color coin-buttons"
    >
      <Image
        alt="Coins"
        className="leads-photo-abs3"
        src="/assets/images/dogecoin.webp"
        width={50}
        height={50}
      />
      <h4> DOGE </h4>
    </div>
    <div
      onClick = {() => currentSlidecoins(4)}
      className="banner mod kyuhi-color coin-buttons"
    >
      <Image
        alt="Coins"
        className="leads-photo-abs3"
        src="/assets/images/etc.webp"
        width={50}
        height={50}
      />
      <h4> ETHEREUM CLASSIC </h4>
    </div>
    <div
      onClick = {() => currentSlidecoins(5)}
      className="banner mod shikoku-color coin-buttons"
    >
      <Image
        alt="Coins"
        className="leads-photo-abs3"
        src="/assets/images/ethereum.webp"
        width={50}
        height={50}
      />
      <h4> ETHEREUM </h4>
    </div>
    <div
      onClick = {() => currentSlidecoins(6)}
      className="banner mod squid-color coin-buttons"
    >
      <Image
        alt="Coins"
        className="leads-photo-abs3"
        src="/assets/images/litecoin.webp"
        width={50}
        height={50}
      />
      <h4> LITECOIN </h4>
    </div>
    <div
      onClick = {() => currentSlidecoins(7)}
      className="banner mod seqsee-color coin-buttons"
    >
      <Image
        alt="Coins"
        className="leads-photo-abs3"
        src="/assets/images/metrix-coin.png"
        width={50}
        height={50}
      />
      <h4> METRIX COIN </h4>
    </div>
    <div
      onClick = {() => currentSlidecoins(8)}
      className="banner mod vanikoro-color coin-buttons"
    >
      <Image
        alt="Coins"
        className="leads-photo-abs3"
        src="/assets/images/namecoin.png"
        width={50}
        height={50}
      />
      <h4> NAME COIN </h4>
    </div>
    <div
      onClick = {() => currentSlidecoins(9)}
      className="banner mod kyuhi-color coin-buttons"
    >
      <Image
        alt="Coins"
        className="leads-photo-abs3"
        src="/assets/images/ohm.png"
        width={50}
        height={50}
      />
      <h4> OHM COIN </h4>
    </div>
    <div
      onClick = {() => currentSlidecoins(10)}
      className="banner mod shikoku-color coin-buttons"
    >
      <Image
        alt="Coins"
        className="leads-photo-abs3"
        src="/assets/images/zcash.webp"
        width={50}
        height={50}
      />
      <h4> ZCASH </h4>
    </div>
    <div
      onClick = {() => currentSlidecoins(11)}
      className="banner mod vanikoro-color coin-buttons"
    >
      <Image
        alt="Coins"
        className="leads-photo-abs3"
        src="/assets/images/scc.png"
        width={50}
        height={50}
      />
      <h4> SCC </h4>
    </div>
  </div>
  
    
    );
      
    export default Coins;