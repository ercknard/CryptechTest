import Comets from "@components/materials/Comets";
import PipeToLeft from "@components/materials/PipeToLeft";
import PipeToRight from "@components/materials/PipeToRight";
import TestCoinText from "@components/materials/TestCoinText";
import GateCoin from "@components/materials/gates/GateCoin";
import Image from "next/image";
const TestCoin= () => (

    <>

        <PipeToRight />

        <GateCoin />

        <section className="width-class">
        <h2
            data-aos="zoom-in"
            data-aos-duration={2000}
            data-aos-anchor-placement="bottom-bottom"
            className="glitch"
            data-glitch="TEST COIN"
        >
            {" "}
            <div className="sec-title">
            TEST COIN</div>{" "}
        </h2>
        <div className="the-ship">
            <Comets />
            <div className="test">
            {/* <Image alt="Coin Mascot" className="leads-portrait-1 squid" src="/assets/images/kyuhi-land.png" width={357} height={649}/> */}
            <div>
                <Image alt="Testcoin" className="test-coin vert-move" src="/assets/images/testcoin.png" width={512} height={512}/>
                <div className="fence" />
                    <TestCoinText />
                <div className="fence" />
            </div>
            {/* <Image alt="Coin Mascot" className="leads-portrait-1 squid" src="/assets/images/pepita-land.png" width={357} height={649}/> */}
            </div>
        </div>
        </section>

        <PipeToLeft />

    </>
    
    );
      
    export default TestCoin;