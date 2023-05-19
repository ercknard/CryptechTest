import AllScripts from "@components/materials/Scripts";
import LandingPage from "@components/sections/LandingPage";
import PepeSpace from "@components/sections/PepeSpace";
import Footer from "@components/sections/Footer";
import CustomLoader from "@components/materials/CustomLoader";
import GateLoader from "@components/materials/GateLoader";
import Spaceship from "@components/sections/Spaceship";
import ShipText from "@components/sections/ShipText";
import Earth from "@components/sections/Earth";
import EarthText from "@components/sections/EarthText";
import BottomWorld from "@components/sections/BottomWorld";
import AdminCover from "@components/materials/admins/AdminCover";
import AdminCard from "@components/materials/admins/cards/AdminCard";
import Modal from "@components/materials/Modal";
import "@styles/globals.css";
import "@styles/AOS.css";
import "@styles/animations.css";
import "@styles/fireflies.css";



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
          <ShipText />
          <Earth />
          <EarthText />
          <AdminCover />
          <AdminCard />
          <BottomWorld />
            {children}
            </div>
        </div>
          <Footer />
        <Modal />
      <GateLoader />
    </body>
  </html>
);

export default RootLayout;
