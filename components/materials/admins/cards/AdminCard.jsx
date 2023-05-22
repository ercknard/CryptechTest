import Image from "next/image";
import SquidCard from "./SquidCard";
import SeqseeCard from "./SeqseeCard";
import ShikokuCard from "./ShikokuCard";
import VanikoroCard from "./VanikoroCard";
import KyuhiCard from "./KyuhiCard";
import StickCard from "./StickCard";
import Ferbog05Card from "./Ferbog05Card";
import MatadorCard from "./MatadorCard";
import DemilCard from "./DemilCard";
import TonicCard from "./TonicCard";

const AdminCard= () => (
<>
<div className="container-main-admin">
<div className="container-main admins-bg">
   <div
      data-aos="fade-left"
      data-aos-easing="ease-in-out"
      data-aos-duration={1000}
      className="width-class admin-op card"
      >
      <div className="glow" />
         <div className="pipe-padding">
            <h3>
               {" "}
               CryptechTest Admins:{" "}
               <span>
                  <Image alt="Admin Head" 
                  className="default" 
                  src="/assets/images/pepe-head.png"           
                  width={267}
                  height={267}/>
               </span>
            </h3>
            <div id="theme-modal-button">
               <div id="leads-active-btn" className="agent-home">
                  <SquidCard />
                  <SeqseeCard />
                  <VanikoroCard />
                  <KyuhiCard />
                  <ShikokuCard />
                  <StickCard />
                  <Ferbog05Card />
                  <MatadorCard />
                  <DemilCard />
                  <TonicCard />
               </div>
               <a
                  className="a-button story-button"
                  href="https://discord.com/invite/WxvrzzPFAH"
                  target="_blank"
                  >
               {" "}
               Discord: CryptechTest{" "} </a>
            </div>
         </div>
      </div>
   </div>
</div>
</>
);

export default AdminCard;