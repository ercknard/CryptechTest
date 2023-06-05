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

const MainPage = () => (
  <>
    <PepeKeychain />
    <Navigation />
    <LandingPage />
    <div className="sec-2">
      <Image
        data-aos="fade-up"
        data-aos-duration="1000"
        priority="true"
        alt="Ships"
        id="main-ship"
        className="ship-specs-main"
        src="/assets/images/station-1.webp"
        width={3620}
        height={1969}
      />
      <div className="sec">
        {/* <PepeSpace /> */}
        <Spaceship />
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
