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
import GearTeam from "@components/materials/gears/GearTeam";
import ErcknardCard from "./ErcknardCard";

const AdminCard = () => (
  <>
    <div className="container-main-admin">
      <div className="container-main admins-bg">
        <div className="width-class admin-op card">
          <GearTeam />{" "}
          <div div data-aos="zoom-out" data-aos-duration={100}>
            <div className="glow" />
            <div className="pipe-padding">
              <h3>
                {" "}
                CryptechTest Team:{" "}
                <span>
                  <Image
                    alt="Admin Head"
                    className="default"
                    src="/assets/images/pepe-head.webp"
                    width={267}
                    height={267}
                  />
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
                  {/* <ErcknardCard /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AdminCard;
