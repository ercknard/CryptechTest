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
          <div div data-aos="zoom-out" data-aos-duration={100}>
            <div className="glow" />
            <div className="pipe-padding">
              <div className="to-vert-center">
                <span>
                  <GearTeam />{" "}
                </span>
                <h3>CryptechTest Team:</h3>
              </div>
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
