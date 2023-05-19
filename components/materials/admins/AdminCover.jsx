import PipeToLeft from "../PipeToLeft";
import PipeToRight from "../PipeToRight";
import GateAdmin from "../gates/GateAdmin";
import Kyuhi from "./Kyuhi";
import Seqsee from "./Seqsee";
import Shikoku from "./Shikoku";
import Squid from "./Squid";
import Vanikoro from "./Vanikoro";

const AdminCover= () => (

    <>

    <PipeToRight/>

        <section className="width-class-admin">

            <GateAdmin />
            
        <h2
            data-aos="zoom-in"
            data-aos-duration={500}
            data-aos-anchor-placement="bottom-bottom"
            className="glitch"
            data-glitch="TEAM LEADS"
        >
            {" "}
            TEAM LEADS
        </h2>
        <div className="the-ship">

            <Squid />
            <Seqsee />
            <Vanikoro />
            <Kyuhi />
            <Shikoku />

        </div>
        </section>     

        <PipeToLeft /> 

    </>
    
    );
      
    export default AdminCover;