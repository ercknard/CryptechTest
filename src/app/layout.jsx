import AllScripts from "@components/materials/Scripts";
import LandingPage from "@components/sections/LandingPage";
import PepeSpace from "@components/sections/PepeSpace";
import Gate from "@components/materials/Gate";
import Footer from "@components/sections/Footer";
import CustomLoader from "@components/materials/CustomLoader";
import GateLoader from "@components/materials/GateLoader";
import ModalGate from "@components/materials/ModalGate";
import "@styles/AOS.css";
import "@styles/globals.css";
import "@styles/animations.css";
import "@styles/fireflies.css";
import Spaceship from "@components/sections/Spaceship";


export const metadata = {
  title: "CryptechTest",
  description: "Cryptech Test SMP Server and Cryptech Test Game",
  keywords: "MineTest, CryptechTest, Cryptocurrency, BTC, ETH, MRX, SEND, OHMC, SCC",
  author: "Ercknard Guren I",
  chartset: "UTF-8",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
      <AllScripts />
      <link rel="icon" href="/assets/images/pack.png" />
    </head>
    <body>
    {/* <CustomLoader /> */}
      <LandingPage />
        <PepeSpace />
        <div className="sec-2">
          <div className="sec">
          <Spaceship />
            {children}
            </div>
        </div>
          <Footer />
        {/* <ModalGate /> */}
      <GateLoader />
    </body>
  </html>
);

export default RootLayout;
