import LandingPage from "@components/sections/LandingPage";
import PepeSpace from "@components/sections/PepeSpace";
import Footer from "@components/sections/Footer";
import GateLoader from "@components/materials/GateLoader";
import Spaceship from "@components/sections/Play";
import ShipText from "@components/sections/Announcements";
import Earth from "@components/sections/Starships";
import EarthText from "@components/sections/StarshipSelector";
import BottomWorld from "@components/sections/BottomWorld";
import AdminCover from "@components/materials/admins/AdminCover";
import AdminCard from "@components/materials/admins/cards/AdminCard";
import Modal from "@components/materials/Modal";
import TestCoin from "@components/sections/TestCoin";
import Navigation from "@components/sections/Navigation";
import PepeKeychain from "@components/materials/PepeKeychain";
import Donate from "@components/sections/Donate";
import Fabs from "@components/materials/Fabs";
import GithubFeeds from "./GithubFeeds";
import OurPartners from "./OurPartners";
import Image from "next/image";
import ShipMain from "@components/materials/ShipMain";

const MainPage = () => (
  <>
    <PepeKeychain />
    <Navigation />
    <LandingPage />
    <div className="sec-2">
      <ShipMain />
      <div className="sec">
        {/* <PepeSpace /> */}
        <Spaceship />
        {/* <PepeSpace /> */}
        <section id="play" />
        <ShipText />
        <section id="news" />
        <Earth />
        <EarthText />
        <section id="starships" />
        <AdminCover />
        <AdminCard />
        <section id="team" />
        <TestCoin />
        <Donate />
        <section id="donate" />
        <OurPartners />
        <GithubFeeds />
        <section id="feeds" />
        <BottomWorld />
      </div>
    </div>
    <Footer />
    <Modal />
    <GateLoader />
    <Fabs />
  </>
);

export default MainPage;
